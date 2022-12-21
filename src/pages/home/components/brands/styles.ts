import styled from "styled-components";

export const BrandsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    max-width: 68.875rem;
    margin: 0 auto;

    padding-inline: 1rem;

    overflow-x: auto;
    scroll-behavior: smooth;

    margin-block: 4.5625rem;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const BrandsContent = styled.div`
    width: 354px;
    height: 239px;

    border-radius: 1.375rem;

    background-color: ${({ theme }) => theme["white-400"]};

    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    gap: 1.625rem;

    div {
        max-width: 10.8125rem;
        width: 100%;

        h1 {
            color: ${({ theme }) => theme["black-700"]};
            font-size: 2.25rem;
        }

        p {
            color: ${({ theme }) => theme["gray-400"]};
            font-weight: 500;
            line-height: 1.1875rem;
        }
    }

    @media (max-width: 890px) {
        width: 300px;
        height: 190px;

        gap: 1rem;

       div {
            h1 {
                font-size: 2rem;
            }

            p {
                font-size: 1rem;
            }
       }
    }

    @media (max-width: 742px) {
        width: 250px;
        height: 165px;

        gap: 0.85rem;

        img {
            width: 65px;
        }

        div {
            h1 {
                font-size: 1.9rem;
            }

            p {
                font-size: 0.90rem;
            }
       }
    }

    @media (max-width: 625px) {
        width: 220px;
        height: 140px;

        img {
            width: 60px;
        }

        div {
            h1 {
                font-size: 1.6rem;
            }

            p {
                font-size: 0.85rem;
            }
       }
    }

    @media (max-width: 545px) {
        width: 190px;
        height: 140px;
    }
`