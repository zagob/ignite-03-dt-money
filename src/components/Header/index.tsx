import {
  HeaderContainer,
  HeaderContent,
  LgImage,
  NewTransactionButton,
  SmImage,
} from "./styles";

import logoImg from "../../assets/Logo.svg";
import logoImgMobile from "../../assets/logoMobile.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LgImage>
          <img src={logoImg} />
        </LgImage>
        <SmImage>
          <img src={logoImgMobile} />
        </SmImage>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
