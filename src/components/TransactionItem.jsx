import React from "react";
import styled from "styled-components";

const CategoryIcon = ({ category }) => {
  const icons = {
    FOOD: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 0C8.20435 0 7.44129 0.316071 6.87868 0.87868C6.31607 1.44129 6 2.20435 6 3V9H9V18C9.39782 18 9.77936 17.842 10.0607 17.5607C10.342 17.2794 10.5 16.8978 10.5 16.5V9C10.5 8.60218 10.658 8.22064 10.9393 7.93934C11.2206 7.65804 11.6022 7.5 12 7.5C12.3978 7.5 12.7794 7.65804 13.0607 7.93934C13.342 8.22064 13.5 8.60218 13.5 9V18H15V9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.56631 7.19106 9.32174 7.56556 9.15825 7.97625C9.05325 6.93375 8.25 3 8.25 3H7.5V9H6V3C6 2.60218 5.84196 2.22064 5.56066 1.93934C5.27936 1.65804 4.89782 1.5 4.5 1.5C4.10218 1.5 3.72064 1.65804 3.43934 1.93934C3.15804 2.22064 3 2.60218 3 3V18H4.5V9H6V18H7.5V9H9V0Z"
          fill="currentColor"
        />
      </svg>
    ),
    HOUSING: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 2.25L2.25 7.5V15.75H6.75V11.25H11.25V15.75H15.75V7.5L9 2.25Z"
          fill="currentColor"
        />
      </svg>
    ),
    TRANSPORT: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 3C3.67157 3 3 3.67157 3 4.5V12C3 12.8284 3.67157 13.5 4.5 13.5H13.5C14.3284 13.5 15 12.8284 15 12V4.5C15 3.67157 14.3284 3 13.5 3H4.5ZM4.5 4.5H13.5V7.5H4.5V4.5ZM5.25 11.25C5.66421 11.25 6 10.9142 6 10.5C6 10.0858 5.66421 9.75 5.25 9.75C4.83579 9.75 4.5 10.0858 4.5 10.5C4.5 10.9142 4.83579 11.25 5.25 11.25ZM12.75 11.25C13.1642 11.25 13.5 10.9142 13.5 10.5C13.5 10.0858 13.1642 9.75 12.75 9.75C12.3358 9.75 12 10.0858 12 10.5C12 10.9142 12.3358 11.25 12.75 11.25Z"
          fill="currentColor"
        />
      </svg>
    ),
    SHOPPING: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 3V4.5H4.5L7.5 12L6.375 14.25C5.8125 15.375 6.5625 16.5 7.875 16.5H15V15H7.875L8.625 13.5H12.75C13.3125 13.5 13.8125 13.1875 14.0625 12.6875L17.0625 7.3125C17.4375 6.5625 16.875 5.625 16.0625 5.625H6.1875L5.4375 3.75C5.3125 3.4375 5.0625 3.1875 4.6875 3H3ZM7.5 18C6.675 18 6 17.325 6 16.5C6 15.675 6.675 15 7.5 15C8.325 15 9 15.675 9 16.5C9 17.325 8.325 18 7.5 18ZM13.5 18C12.675 18 12 17.325 12 16.5C12 15.675 12.675 15 13.5 15C14.325 15 15 15.675 15 16.5C15 17.325 14.325 18 13.5 18Z"
          fill="currentColor"
        />
      </svg>
    ),
    TRAVEL: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 5.25L11.25 7.5L6 3.75L4.5 4.5L8.25 9L3 11.25L1.5 10.5L0.75 11.25L3 13.5L5.25 16.5L6 15.75L5.25 14.25L7.5 12.75L12 16.5L12.75 15L9 9.75L14.25 7.5L16.5 5.25Z"
          fill="currentColor"
        />
      </svg>
    ),
    STUDY_MATERIALS: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 3C3.67157 3 3 3.67157 3 4.5V13.5C3 14.3284 3.67157 15 4.5 15H13.5C14.3284 15 15 14.3284 15 13.5V4.5C15 3.67157 14.3284 3 13.5 3H4.5ZM6 6H12V7.5H6V6ZM6 9H12V10.5H6V9Z"
          fill="currentColor"
        />
      </svg>
    ),
    ALLOWANCE: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 9 1.5ZM9 3C12.315 3 15 5.685 15 9C15 12.315 12.315 15 9 15C5.685 15 3 12.315 3 9C3 5.685 5.685 3 9 3ZM8.25 5.25V6.75H7.5V8.25H8.25V11.25H7.5V12.75H10.5V11.25H9.75V6.75H8.25V5.25Z"
          fill="currentColor"
        />
      </svg>
    ),
    ETC: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4.5" cy="9" r="1.5" fill="currentColor" />
        <circle cx="9" cy="9" r="1.5" fill="currentColor" />
        <circle cx="13.5" cy="9" r="1.5" fill="currentColor" />
      </svg>
    ),
  };

  return <IconWrapper>{icons[category] || icons.ETC}</IconWrapper>;
};

const TransactionItem = ({ transaction, onClick }) => {
  const categoryLabels = {
    FOOD: "식비",
    HOUSING: "주거비",
    TRANSPORT: "교통비",
    SHOPPING: "쇼핑비",
    TRAVEL: "여행비",
    STUDY_MATERIALS: "교재비",
    ALLOWANCE: "용돈",
    ETC: "기타",
  };

  const formatAmount = (amount) => {
    return parseFloat(amount).toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };

  const getCurrencySymbol = (code) => {
    const symbols = {
      USD: "$",
      KRW: "₩",
      EUR: "€",
      JPY: "¥",
      GBP: "£",
      CNY: "¥",
      CAD: "CA$",
      TWD: "NT$",
    };
    return symbols[code] || code;
  };

  const isExpense = transaction.entry_type === "EXPENSE";
  const categoryLabel =
    categoryLabels[transaction.category] || transaction.category;

  const primaryAmount = `${isExpense ? "-" : "+"} ${getCurrencySymbol(
    transaction.currency_code
  )}${formatAmount(transaction.amount)}`;

  const secondaryAmount = `${getCurrencySymbol(
    transaction.converted_currency_code
  )}${formatAmount(transaction.amount_converted)}`;

  return (
    <ItemWrapper onClick={() => onClick && onClick(transaction)}>
      <CategoryInfo>
        <CategoryIcon category={transaction.category} />
        <CategoryLabel>{categoryLabel}</CategoryLabel>
      </CategoryInfo>

      <AmountInfo>
        <PrimaryAmount $isExpense={isExpense}>{primaryAmount}</PrimaryAmount>
        <SecondaryAmount>{secondaryAmount}</SecondaryAmount>
      </AmountInfo>
    </ItemWrapper>
  );
};

export default TransactionItem;

//
// ————————————————————— 스타일링 —————————————————————

const ItemWrapper = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 0.79275rem;

  border: 1px solid var(--light-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.79rem 1.1rem 0.79rem 1.1rem;

  background: var(--white);
  border-bottom: 1px solid var(--light-gray);

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f9f9f9;
  }

  &:last-child {
  }
`;

const CategoryInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  width: 1.125rem;
  height: 1.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gray);

  svg {
    width: 100%;
    height: 100%;
  }
`;

const CategoryLabel = styled.span`
  color: var(--black);
  font-size: 1rem;
  font-weight: 500;
`;

const AmountInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const PrimaryAmount = styled.span`
  color: ${({ $isExpense }) => ($isExpense ? "var(--black)" : "var(--blue)")};
  font-size: 1.125rem;
  font-weight: 700;
`;

const SecondaryAmount = styled.span`
  color: var(--gray);
  font-size: 0.875rem;
  font-weight: 500;
`;
