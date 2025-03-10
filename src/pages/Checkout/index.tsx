import { MapPinLine } from "@phosphor-icons/react";
import { Address, CheckoutContainer, HeaderAddress } from "./styles";
import { TextInput } from "../../Components/Form/Input";

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
        <h3>Complete seu pedido</h3>

        <Address>
          <HeaderAddress>
            <MapPinLine />
            <p>
              <span>Endereço de Entrega</span>
              Informe o endereço onde deseja receber seu pedido
            </p>
          </HeaderAddress>

          <div>
            <TextInput />
          </div>
        </Address>
      </form>

      <div>
        <h3></h3>
        <div>InfoCart</div>
      </div>
    </CheckoutContainer>
  );
}
