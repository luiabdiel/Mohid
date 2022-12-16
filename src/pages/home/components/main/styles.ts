import styled from "styled-components";

export const MainContainer = styled.div`
    max-width: 68.75rem;
    max-height: 32.3125rem;
    height: 100%;
    width: 100%;

    padding-inline: 1rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;

    @media (max-width: 576px) {
        flex-direction: column;
    }
`

export const MainContentText = styled.div`
    max-width: 28.5625rem;
    width: 100%;

    h1 {
        font-size: 4rem;
        line-height: 5rem;
        color: ${({ theme }) => theme.white};

        margin-bottom: 1rem;
    }

    p {
        line-height: 1.25rem;
        color: ${({ theme }) => theme["gray-400"]};
    }

    @media (max-width: 1200px) {
        max-width: 28rem;

        h1 {
            font-size: 3.9rem;
            line-height: 4.5rem;
        }
    }

    @media (max-width: 900px) {
        max-width: 25.2rem;

        h1 {
            font-size: 3.5rem;
            line-height: 4rem;
        }
    }

    @media (max-width: 768px) {
        max-width: 21.6rem;

        h1  {
            font-size: 3rem;
            line-height: 3.5rem;
        }

        p {
            font-size: 0.90rem;
        }
    }

    @media (max-width: 667px) {
        max-width: 19.8rem;

        h1  {
            font-size: 3rem;
        }

        p {
            font-size: 0.90rem;
        }
    }
`

export const MainContentImage = styled.div`
    max-width: 26.125rem;
    max-height: 32.0625rem;

    img {
        width: 100%;
        height: 100%;
    }
    @media (max-width: 1200px) {
        width: 25rem;
        height: 31rem;
    }

    @media (max-width: 900px) {
        width: 20rem;
        height: 25rem;
    }

    @media (max-width: 768px) {
       width: 18rem;    
       height: 23rem;
    }

    @media (max-width: 635px) {
        img {
            width: 17rem;
            height: 22rem;
        }
    }

    @media (max-width: 576px) {
        display: none;
    }
`
