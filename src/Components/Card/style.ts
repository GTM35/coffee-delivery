import styled from "styled-components";
import { tag, textM, textS, titleM, titleS } from "../../styles/fonts";

export const ContainerCoffe = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 1.25rem;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageCard = styled.img`
  width: 7.5rem;
  margin-top: -2.5rem;

  margin-bottom: 0.75rem;
`;

export const Tag = styled.div`
  background-color: ${(props) => props.theme["yellow-light"]};
  padding: 0.25rem 0.5rem;

  display: flex;
  align-items: center;

  border-radius: 100px;

  span {
    ${tag}
    text-transform:uppercase;
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const TitleCard = styled.div`
  h3 {
    ${titleS};
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 0.5rem;
  }
`;

export const DescriptionCard = styled.div`
  margin-bottom: 2.0625rem;
  text-align: center;
  span {
    ${textS};
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const Control = styled.div`
  width: 100%;
  max-width: 13rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  span:first-child {
    color: ${(props) => props.theme["base-text"]};
    ${textS}
  }

  span:last-child {
    color: ${(props) => props.theme["base-text"]};
    ${titleM};
  }
`;

export const ButtonControl = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  background-color: ${(props) => props.theme["purple-dark"]};
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 0.375rem;

  background-color: ${(props) => props.theme["base-button"]};

  height: 100%;

  button {
    width: fit-content;
    height: fit-content;

    display: flex;
    align-items: center;

    border: none;
    background-color: transparent;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  > span {
    ${textM({ weight: "400" })};
  }
`;
