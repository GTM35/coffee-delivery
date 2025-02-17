import { css } from "styled-components";

type WeightType = {
  weight: "400" | "700";
};

export const titleXL = css`
  font-family: "Baloo 2", serif;
  font-size: 3rem;
  line-height: 130%;
  font-weight: 800;
`;

export const titleL = css`
  font-family: "Baloo 2", serif;
  font-size: 2rem;
  line-height: 130%;
  font-weight: 800;
`;

export const titleM = css`
  font-family: "Baloo 2", serif;
  font-size: 1.5rem;
  line-height: 130%;
  font-weight: 800;
`;

export const titleS = css`
  font-family: "Baloo 2", serif;
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 700;
`;

export const titleXS = css`
  font-family: "Baloo 2", serif;
  font-size: 1.125rem;
  line-height: 130%;
  font-weight: 700;
`;

export const textL = ({ weight }: WeightType) => css`
  font-size: 1.25rem;
  line-height: 130%;
  font-family: "Roboto", sans-serif;
  font-weight: ${weight};
`;

export const textM = ({ weight }: WeightType) => css`
  font-size: 1rem;
  line-height: 130%;
  font-family: "Roboto", sans-serif;
  font-weight: ${weight};
`;

export const textS = css`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  line-height: 130%;
  font-weight: 400;
`;

export const textXS = css`
  font-family: "Roboto", sans-serif;
  font-size: 1.4375rem;
  line-height: 130%;
  font-weight: 700;
`;

export const tag = css`
  font-family: "Roboto", sans-serif;
  font-size: 0.625rem;
  line-height: 130%;
  font-weight: 700;
`;

export const buttonG = css`
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  line-height: 160%;
  font-weight: 700;
`;

export const buttonM = css`
  font-family: "Roboto", sans-serif;
  font-size: 0.75rem;
  line-height: 160%;
  font-weight: 400;
`;
