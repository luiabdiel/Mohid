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

export const ButtonbrandsCarousel = styled.button`
    background-color: transparent;
    border: none;

    font-size: 25px;
    color: ${({ theme }) => theme["gray-400"]};

    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme["black-700"]};

        transition: .1s;
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
`