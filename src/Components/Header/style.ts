import styled from "styled-components";
import { textS } from "../../styles/fonts";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 10rem;
`;

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;
`;

export const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["purple-light"]};
  padding: 0.625rem 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;
  max-height: 2.375rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    ${textS}
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const ContainerCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 6px;
  max-width: 2.375rem;
  max-height: 2.375rem;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;
