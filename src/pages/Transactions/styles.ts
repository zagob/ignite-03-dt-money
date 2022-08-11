import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem 2rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media (max-width: 660px) {
    display: none;
  }
`;

export const TransactionsTableMobile = styled.section`
  display: none;

  @media (max-width: 660px) {
    margin-top: 1rem;
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      font-size: 16px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      color: ${(props) => props.theme["gray-500"]};
      font-size: 16px;

      span {
        display: flex;
        align-items: center;
        gap: 0.4rem;
      }
    }
  }
`;

interface PriceHighlightProps {
  variant: "income" | "outcome";
}

export const PriceHighlightMobile = styled.span<PriceHighlightProps>`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;

export const PriceHighlight = styled.td<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;
