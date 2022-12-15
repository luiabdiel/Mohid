import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme['white-300']};
        color: ${({ theme }) => theme["black-300"]};

        -webkit-font-smoothing: antialiased;

        margin: 0 auto;
    }

    body, input, textarea, button {
        font: 400 1rem 'Poppins', sans-serif;

        a {
            text-decoration: none;
        }
        li {
            list-style: none;
        }
  }
`