import styled from "styled-components";

export const ReviewsContainer = styled.div`
    max-width: 68.75rem;
    width: 100%;

    margin: 0 auto;
`

export const ReviewsTitle = styled.div`
    text-align: center;

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