import styled from "styled-components";

export const TranactionsContainer = styled.main`
  width: 100%;
  max-width: 112rem;
  margin: 6.4rem auto 0;
  padding: 0 3.2rem;
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.8rem;
  margin-top: 2.4rem;
  overflow: auto;

  td {
    padding: 2rem 3.2rem;
    background: ${(props) => props.theme["gray-700"]};

    &:first-child {
      width: 50%;
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`;

interface PriceHighLightProps {
  variant: "income" | "outcome";
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === "income"
      ? props.theme["green-300"]
      : props.theme["red-300"]};
`;
