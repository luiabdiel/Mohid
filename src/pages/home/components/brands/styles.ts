import styled from "styled-components";

export const BrandsContainer = styled.div`
    width: 354px;
    height: 239px;

    border-radius: 1.375rem;

    background-color: ${({ theme }) => theme["white-400"]};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.625rem;

    margin-top: 4.5625rem;

    div {
        width: 10.8125rem;

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