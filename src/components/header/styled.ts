import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["gray-900"]};
  padding: 4rem 0 12rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 112rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 2.4rem;
`;

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme["green-500"]};

  border-radius: 6px;
  padding: 0 2rem;

  color: ${(props) => props.theme["white"]};
  font-weight: 700;

  cursor: pointer;

  transition: background 0.5s;

  &:hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;
