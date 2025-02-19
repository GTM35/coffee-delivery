import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {
  ButtonControl,
  Quantity,
  ContainerCoffe,
  Control,
  DescriptionCard,
  ImageCard,
  Price,
  Tag,
  TitleCard,
} from "./style";
import { defaultTheme } from "../../styles/themes/default";

export function Card() {
  return (
    <ContainerCoffe>
      <ImageCard src="../coffee-item.svg" alt="" />
      <Tag>
        <span>Tradicional</span>
      </Tag>
      <TitleCard>
        <h3>Expresso Tradicional</h3>
      </TitleCard>
      <DescriptionCard>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </DescriptionCard>

      <Control>
        <Price>
          <span>R$</span>
          <span>9,90</span>
        </Price>
        <Quantity>
          <button>
            <Minus size={14} weight="bold" />
          </button>
          <span>1</span>
          <button>
            <Plus size={14} weight="bold" />
          </button>
        </Quantity>
        <ButtonControl>
          <ShoppingCart
            size={22}
            color={defaultTheme["base-card"]}
            weight="fill"
          />
        </ButtonControl>
      </Control>
    </ContainerCoffe>
  );
}
