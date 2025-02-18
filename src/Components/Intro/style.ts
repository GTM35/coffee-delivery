import styled from "styled-components";
import { textL, textM, titleXL } from "../../styles/fonts";

export interface IconContainerProps {
  color: string;
}

export const IntroContainer = styled.section`
  height: 34rem;

  display: flex;
  padding: 0 10rem;
  align-items: center;
  justify-content: space-between;

  background-image: url("../background.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Information = styled.div`
  width: 100%;
  max-width: 36.75rem;
`;

export const TitleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    ${titleXL}
  }

  p {
    width: 100%;
    ${textL({ weight: "400" })};
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Items = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;
  margin-top: 4.125rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: fit-content;

  span {
    ${textM({ weight: "400" })}
  }
`;

export const ImageHero = styled.img`
  width: 100%;
  max-width: 29.75rem;
`;

export const ContainerIcon = styled.div<IconContainerProps>`
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;

  svg {
    color: #fff;
  }

  ${(props) => {
    return `
      background-color: ${props.color};
    `;
  }};
`;
