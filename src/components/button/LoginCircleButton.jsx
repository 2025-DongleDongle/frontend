import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthAPI } from "@/apis";
import Modal from "../Modal";


const LoginCircleButton = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [showScrapModal, setShowScrapModal] = useState(false);

    const onClick = async () => {
        if (!isLoggedIn) {
            navigate('/login');
        } else {
            if (window.scrapLoading) {
                setShowScrapModal(true);
                return;
            }
            try {
                await AuthAPI.logout();
                // 로컬 스토리지에서 토큰 제거
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                localStorage.removeItem("username");
                // 로그아웃 상태로 변경
                setIsLoggedIn(false);
                window.dispatchEvent(new Event("storage"));
            } catch (error) {
                console.error("로그아웃 실패:", error);
                // 에러가 발생해도 로컬 상태는 정리
                localStorage.removeItem("token");
                localStorage.removeItem("userId");
                localStorage.removeItem("username");
                setIsLoggedIn(false);
                window.dispatchEvent(new Event("storage"));
            }
        }
    };
    
    return (
        <>
            <StyledLoginCircleButton
                onClick={onClick}
                $isLoggedIn={isLoggedIn}
            >
                {isLoggedIn ? "로그아웃" : "로그인"}
            </StyledLoginCircleButton>
            {showScrapModal && (
                <Modal
                    isOpen={showScrapModal}
                    showCancelButton = {false}
                    content="스크랩 처리 중입니다."
                    subtext="잠시만 기다려주세요."
                    actionText="닫기"
                    onClose={() => setShowScrapModal(false)}
                />
            )}
        </>
    );
}

export default LoginCircleButton;

const StyledLoginCircleButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3.25rem;
    width: 6.5625rem;

    white-space: nowrap;

    border-radius: 2.5rem;

    border: ${({ $isLoggedIn }) =>
    $isLoggedIn ? "1px solid var(--gray, #A5A5A5)" : "none"};

    background: ${({ $isLoggedIn }) =>
    $isLoggedIn ? "var(--white, #fff)" : "var(--blue, #115BCA)"};

    color: ${({ $isLoggedIn }) =>
    $isLoggedIn ? "var(--black, #000)" : "var(--white, #fff)"};

    font-size: 1.125rem;
    font-weight: 500;

    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }
`;