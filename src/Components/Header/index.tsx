import {
  Aside,
  ContainerActions,
  ContainerCart,
  HeaderContainer,
} from "./style";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <img src="./Logo.svg" alt="" />

      <Aside>
        <ContainerActions>
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </ContainerActions>
        <ContainerCart>
          <ShoppingCart fontSize={22} weight="fill" />
        </ContainerCart>
      </Aside>
    </HeaderContainer>
  );
}
