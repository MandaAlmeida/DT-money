import logo from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styled";
import { Modal } from "../modal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="logo ignite" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <Modal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
