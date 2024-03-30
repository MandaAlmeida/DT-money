import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 112rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.2rem;

  margin: 0 auto;
  margin-top: -8rem;
  padding: 0 2.4rem;
`;

interface SummaryCardProps {
  variant?: "green";
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 3.2rem;
  flex: 1;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1.6rem;
    font-size: 3.2rem;
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: ${props.theme["green-700"]};
    `}
`;
