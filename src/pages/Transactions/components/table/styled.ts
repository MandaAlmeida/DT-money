import styled from "styled-components";

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.8rem;
  margin-top: 2.4rem;

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

  @media (max-width: 768px) {
    border-spacing: 0;

    tbody {
      display: flex;
      flex-direction: column;
      gap: 10px;

      tr {
        display: flex;
        flex-wrap: wrap;

        td {
          &:nth-child(-n + 2) {
            width: 100%;
          }

          &:nth-child(n + 3) {
            width: 50%;
          }

          &:first-child {
            border-radius: 6px 6px 0 0;
          }

          &:last-child {
            border-radius: 0 0 6px 0;
          }

          &:nth-child(3n) {
            border-radius: 0 0 0 6px;
          }
        }
      }
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
