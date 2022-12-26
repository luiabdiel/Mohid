import styled from "styled-components";

export const NewsletterContainer = styled.div`
    max-width: 68.75rem;
    width: 100%;

    padding-inline: 1rem;

    margin: 0 auto;
`

export const NewsletterContent = styled.div`
    background-color: ${({ theme }) => theme["white-400"]};
    height: 23.5625rem;
       
    border-radius: 22px;

    padding-inline: 6.0625rem 6.875rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 956px) {
        padding-inline: 2rem;
    }

    @media (max-width: 813px) {
        padding-inline: 1rem;
    }
`

export const NewsletterLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    max-width: 27.9rem;
    width: 100%;

    h3 {
        font-size: 2.25rem;
        line-height: 1.75rem;
    }

    p {
        color: ${({ theme }) => theme["gray-400"]};
        line-height: 1.21rem;
    }

    @media (max-width: 781px) {
        margin: 0 auto;
    }

    @media (max-width: 508px) {
        h3 {
            font-size: 2rem;
        }
    }

    @media (max-width: 460px) {
        h3 {
            font-size: 1.7rem;
        }
    }

    @media (max-width: 400px) {
        h3 {
            font-size: 1.55rem;
        }

        p {
            font-size: 0.85rem;
        }
    }
`

export const FormContainer = styled.form`
    max-width: 27.6875rem;
    width: 100%;
    height: 3.75rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.white};

    border-radius: 15px;

    input {
        border: none;
        outline: none;
        padding-left: 1.875rem;

        font-weight: 500;
        
        &::placeholder {
            color: ${({ theme }) => theme["gray-500"]};
        }

        @media (max-width: 390px) {
            padding-left: 1rem;
        }
    }

    button {
        border: 2px solid transparent;
        border-radius: 9px;

        cursor: pointer;

        background-color: ${({ theme }) => theme.purple};
        color: ${({ theme }) => theme.white};

        font-weight: 600;

        margin-right: 0.5625rem;

        width: 8.1875rem;
        height: 2.8125rem;

        &:hover {
            border: 2px solid ${({ theme }) => theme.purple};
            color: ${({ theme }) => theme.purple};

            background-color: transparent;

            transition: .2s;
        }
    }
`

export const NewsletterImage = styled.div`
    @media (max-width: 781px) {
        display: none;
    }
`