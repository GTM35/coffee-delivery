import styled from "styled-components";

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

export const HeaderAddress = styled.div``;
