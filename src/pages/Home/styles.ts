import styled from "styled-components";
import { titleL } from "../../styles/fonts";

export const CoffeContainer = styled.section`
  padding: 2rem 10rem;

  h2 {
    ${titleL};
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 3.375rem;
  }
`;

export const CoffeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  grid-row-gap: 40px;
  grid-column-gap: 32px;
`;
