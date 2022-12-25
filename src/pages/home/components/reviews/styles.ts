import styled from "styled-components";

export const ReviewsContainer = styled.div`
    max-width: 68.75rem;
    width: 100%;

    margin: 0 auto;
`

export const ReviewsTitle = styled.div`
    text-align: center;

    margin-bottom: 3.4375rem;

    span {
        color: ${({ theme }) => theme.purple};
        font-weight: 500;
        line-height: 1.21rem;
    }

    h3 {
        font-size: 2.25rem;
        font-weight: 700;
        line-height: 2.723125rem;
    }
`

export const ReviewsCards = styled.div`
    max-width: 68.75rem;
    width: 100%;

    display: flex;
    gap: 2.9375rem;

    margin-bottom: 12.1875rem;
`

export const ReviewsCardsContainer = styled.div`
    width: 32.75rem;
    height: 14.9375rem;

    padding-inline: 1.875rem 2.625rem;
    border-radius: 22px;

    background-color: ${({ theme }) => theme["white-400"]};

    display: flex;
    align-items: center;
    gap: 1.75rem;
`

export const ReviewsCardsText = styled.div`
    strong {
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.815625rem;
    }

    p {
        color: ${({ theme }) => theme["gray-400"]};
        line-height: 1.21rem;

        margin-block: 0.625rem 0.8125rem;
    }
`