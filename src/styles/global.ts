import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.white};
                
        color: ${({ theme }) => theme["black-700"]};

        -webkit-font-smoothing: antialiased;

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            background-color: ${({ theme }) => theme.black};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme["gray-500"]};
        }
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