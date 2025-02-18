import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import {
  ContainerIcon,
  ImageHero,
  Information,
  IntroContainer,
  Item,
  Items,
  TitleInfo,
} from "./style";
import { defaultTheme } from "../../styles/themes/default";

export function Intro() {
  return (
    <IntroContainer>
      <Information>
        <TitleInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TitleInfo>
        <Items>
          <Item>
            <ContainerIcon color={defaultTheme["yellow-dark"]}>
              <ShoppingCart size={16} weight="fill" />
            </ContainerIcon>
            <span>Compra simples e segura</span>
          </Item>

          <Item>
            <ContainerIcon color={defaultTheme["base-text"]}>
              <Package size={16} weight="fill" />
            </ContainerIcon>
            <span>Embalagem mantém o café intacto</span>
          </Item>

          <Item>
            <ContainerIcon color={defaultTheme.yellow}>
              <Timer size={16} weight="fill" />
            </ContainerIcon>
            <span>Entrega rápida e rastreada</span>
          </Item>
          <Item>
            <ContainerIcon color={defaultTheme.purple}>
              <Coffee size={16} weight="fill" />
            </ContainerIcon>
            <span>O café chega fresquinho até você</span>
          </Item>
        </Items>
      </Information>

      <ImageHero src="./coffe.svg" />
    </IntroContainer>
  );
}
