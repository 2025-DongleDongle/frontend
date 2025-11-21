import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/SquareButton";
import ModalAlertImage from "../assets/Modal_alert.svg";

//
// ————————————————————— 마크업/로직 ————————————————————————
// 가계부 요약본_uploaded
// AcctSummaryProfileData.jsx 에서 popup 창 확인 누를 시 여기로 이동

const AcctSummaryComplete = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <StyledModalImage src={ModalAlertImage} />
      <CompleteText>게시가 완료되었습니다!</CompleteText>
      <Button
        onClick={() => navigate("/summaries/snapshot")}
        customStyle={`
         foont-size: 0.7rem;
         font-weight: 700;
         padding: 0.75rem 4.5rem 0.8125rem 4.5rem;
         width : fit-content;

         background-color: var(--black, #000);
         display: inline-flex;
         justify-content: center;
         align-items: center;
      `}
      >
        게시글 바로가기
      </Button>
    </Wrapper>
  );
};

export default AcctSummaryComplete;

//
// ————————————————————— 스타일링 ————————————————————————

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledModalImage = styled.img`
  width: 6.25rem;
  height: 6.25rem;
`;

const CompleteText = styled.h1`
  display: flex;
  margin: 1rem;
`;
