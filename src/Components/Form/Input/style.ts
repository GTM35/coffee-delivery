import styled from "styled-components";
import { textS } from "../../../styles/fonts";

export const ContainerInput = styled.div``;

export const LabelInput = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme["base-input"]};
  height: 2.625rem;
  padding: 0.75rem;
  border-radius: 4px;

  span {
    ${textS};
    font-style: italic;
    padding-right: 0.75rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-label"]};
  }

  &[data-state="focused"] {
    border: 1px solid ${(props) => props.theme["yellow-dark"]};
  }
  &[data-state="blurred"] {
    border: 1px solid ${(props) => props.theme["base-button"]};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme["base-text"]};

  ${textS}

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;
