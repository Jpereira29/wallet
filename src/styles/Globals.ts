import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(26,7,75,1) 63%, rgba(12,61,105,1) 100%);
        font-family: 'Rubik', sans-serif;
        color: #fff;
    }

    :root {
        --blue: #1d499b;
        --gray: #2d3544;
    }

    * {
        box-sizing: border-box;
    }
`