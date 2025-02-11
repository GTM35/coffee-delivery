import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    body {
        -webkit-font-smoothing:antialiased;
        background-color: ${(props) => props.theme.background};
    }


    body, textarea, input,button {
        font-family: "Roboto", serif;
        font-size: 1rem;
        color: ${(props) => props.theme["base-text"]};
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: "Baloo 2", serif;
        color: ${(props) => props.theme["base-title"]};
    }

`;
