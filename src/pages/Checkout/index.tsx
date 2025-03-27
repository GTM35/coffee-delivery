import { MapPinLine } from "@phosphor-icons/react";
import {
  Address,
  AddressForm,
  CheckoutContainer,
  HeaderAddress,
} from "./styles";
import { TextInput } from "../../Components/Form/Input";

export function Checkout() {
  return (
    <CheckoutContainer>
      <form>
        <h3>Complete seu pedido</h3>

        <Address>
          <HeaderAddress>
            <MapPinLine size={22} />
            <p>
              <span>Endereço de Entrega</span>
              Informe o endereço onde deseja receber seu pedido
            </p>
          </HeaderAddress>

          <AddressForm>
            <TextInput
              styleProps={{ style: { gridArea: "cep" } }}
              contentProps={{ placeholder: "CEP" }}
            />
            <TextInput
              styleProps={{ style: { gridArea: "street" } }}
              contentProps={{ placeholder: "Rua" }}
            />
            <TextInput
              styleProps={{ style: { gridArea: "number" } }}
              contentProps={{ placeholder: "Número" }}
            />
            <TextInput
              styleProps={{ style: { gridArea: "fullAddress" } }}
              contentProps={{ placeholder: "Complemento", isOptional: true }}
            />
            <TextInput
              styleProps={{ style: { gridArea: "neighborhood" } }}
              contentProps={{ placeholder: "Bairro" }}
            />
            <TextInput
              styleProps={{ style: { gridArea: "city" } }}
              contentProps={{ placeholder: "Cidade" }}
            />
            <TextInput
              styleProps={{ style: { gridArea: "state" } }}
              contentProps={{ placeholder: "UF" }}
            />
          </AddressForm>
        </Address>
      </form>

      <div>
        <h3></h3>
        <div>InfoCart</div>
      </div>
    </CheckoutContainer>
  );
}
