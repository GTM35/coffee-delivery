import styled from "styled-components";
import { textM, textS } from "../../styles/fonts";

export const CheckoutContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10rem;
`;

export const Address = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 40px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const HeaderAddress = styled.div`
  display: flex;
  gap: 0.5rem;

  p {
    display: flex;
    flex-direction: column;
    gap: 2px;

    color: ${(props) => props.theme["base-text"]};
    ${textS}

    span {
      ${textM({ weight: "400" })};
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas: "cep . ." "street street street" "number fullAddress fullAddress" "neighborhood city state";
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
  width: 40rem;
  border-radius: 6px;
`;
