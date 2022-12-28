import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.black};

    margin-top: 5.6875rem;

    span {
        color: ${({ theme }) => theme.white};
        font-size: 0.85rem;
    }
`