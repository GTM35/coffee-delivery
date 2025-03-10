import { HashLink } from "react-router-hash-link";
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
      <HashLink to="/">
        <img src="./Logo.svg" alt="" />
      </HashLink>

      <Aside>
        <ContainerActions>
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </ContainerActions>
        <ContainerCart>
          <HashLink to="/checkout">
            <ShoppingCart fontSize={22} weight="fill" />
          </HashLink>
        </ContainerCart>
      </Aside>
    </HeaderContainer>
  );
}
