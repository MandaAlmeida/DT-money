import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1.6rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1.6rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    background: transparent;

    border: 1px solid ${(props) => props.theme["green-300"]};
    border-radius: 6px;
    padding: 1.6rem;

    color: ${(props) => props.theme["green-300"]};
    font-weight: bold;

    cursor: pointer;

    transition: background 0.5s, color 0.5s, border-color 0.5s;

    &:hover {
      background: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
    }
  }
`;
