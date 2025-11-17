import React from "react";
import styled from "styled-components";


const Button = ({ 
  children,       // 버튼 안의 내용
  onClick,        // 클릭 시 실행할 함수
  disabled = false, // 비활성화 여부
  style = {}       // 인라인 스타일 오버라이드
}) => {
    
    return (
        <StyledButton
        onClick={onClick}
        disabled={disabled}
        style={style}
        >
          <h2>{children}</h2>
        </StyledButton>
    );
}

export default Button;

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3.86rem;
    width: 30.88rem;

    border-radius: 0.827rem;
    background: var(--blue, #115BCA);

    color: var(--white, #fff);
    font-size: 1.75rem;
    font-weight: 700;

    &:hover {
        cursor: pointer;
        filter: brightness(0.9);
    }

    &:focus {
        outline: 1px solid var(--blue, #115BCA);
        outline-offset: 2px;
    }

    &:disabled {
        background: var(--gray, #A5A5A5);
        cursor: not-allowed;
    }
`;