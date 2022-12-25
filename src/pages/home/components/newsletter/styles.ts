import styled from "styled-components";

export const NewsletterContainer = styled.div`
    max-width: 68.75rem;
    width: 100%;
    height: 23.5625rem;

    margin: 0 auto;
    border-radius: 22px;

    padding-inline: 1rem;

    background-color: ${({ theme }) => theme["white-400"]};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11.125rem;

    margin-bottom: 5.6875rem;
`

export const NewsletterLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h3 {
        font-size: 2.25rem;
        font-weight: 700;
        line-height: 2.723125rem;
    }

    p {
        font-weight: 500;
        line-height: 1.21rem;
        color: ${({ theme }) => theme["gray-400"]};
    }
`

export const FormContainer = styled.form`
    width: 27.6875rem;
    height: 3.75rem;

    background-color: ${({ theme }) => theme.white};
    border-radius: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
        border: none;

        padding-left: 1.875rem;
        outline: none;

        font-weight: 500;
        
        &::placeholder {
            color: ${({ theme }) => theme["gray-500"]};
        }
    }

    button {
        width: 8.1875rem;
        height: 2.8125rem;

        border: 2px solid transparent;
        border-radius: 9px;
        margin-right: 0.5625rem;

        background-color: ${({ theme }) => theme.purple};
        color: ${({ theme }) => theme.white};
        font-weight: 600;

        cursor: pointer;

        &:hover {
            border: 2px solid ${({ theme }) => theme.purple};
            background-color: transparent;
            color: ${({ theme }) => theme.purple};  

            transition: .2s;
        }
    }
`

export const NewsletterRight = styled.div`
    img {

    }
`