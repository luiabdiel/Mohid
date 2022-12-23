import styled from "styled-components";

export const ProductsContainer = styled.div`
    max-width: 68.75rem;
    width: 100%;

    padding-inline: 1rem;
    
    margin: 0 auto;
`

export const ProductsTitle = styled.div`
    text-align: center;

    margin-bottom: 4.0625rem;

    h3 {
        font-size: 2.25rem;
        font-weight: 700;
        line-height: 1.21rem;
    }

    span {
        color: ${({ theme }) => theme.purple};
        font-weight: 500;
        line-height: 2.723125rem;
    }

    @media (max-width: 394px) {
        h3 {
            line-height: 2rem;
        }
    } 
`

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
    row-gap: 4rem;
`

export const ProductsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-inline: 1rem;
`

export const ProductsImage = styled.div`
    background-color: ${({ theme }) => theme["white-400"]};

    max-width: 20.9375rem;
    width: 100%;
    height: 21.0625rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProductsInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    align-items: center;

    >strong {
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 2.25rem;
    }

    img {
        height: 1rem;
    }

    div {
        display: flex;
        align-items: center;
        gap: 0.3125rem;

        del {
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 500;

            color: ${({ theme }) => theme["gray-400"]};
        }

        strong {
            font-size: 1.25rem;
            font-weight: 600;
        }
    }
`

export const ProductsButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-block: 3.75rem 8.4375rem; 

    button {
        background-color: ${({ theme }) => theme.purple};
        border: 2px solid transparent;
        border-radius: 15px;

        color: ${({ theme }) => theme.white};
        font-size: 1.125rem;
        font-weight: 600;

        width: 196px;
        height: 46px;

        cursor: pointer;

        &:hover {
            background-color: transparent;
            border: 2px solid ${({ theme }) => theme.purple};
            color: ${({ theme }) => theme["black-700"]};

            transition: .2s;
        }
    }
`