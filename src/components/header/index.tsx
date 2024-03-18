import logo from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styled";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="logo ignite" />

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
