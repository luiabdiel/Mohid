import styled, { css } from "styled-components";
import { IMenuMobileContainerProps } from "../../interfaces";

export const MenuMobileContainer = styled.div<IMenuMobileContainerProps>`
    position: fixed;

    width: 100%;
    height: 100vh;

    inset: 0;
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(155.28deg, #383638 2.06%, #0B0B0B 33.08%);

    opacity: 0;
    pointer-events: none;

    transition: 0.1s;
    transform: translateX(50px);

    svg {
        position: absolute;

        color: ${({ theme }) => theme.white};

        top: 1.4rem;
        right: 1rem;

        cursor: pointer;
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateX(0px);
    `}
`

export const LogoContainerMobile = styled.div`
    position: absolute;

    top: 1.4rem;
    left: 1rem;

    display: flex;
    align-items: center;

    span {
        color: ${({ theme }) => theme.white};
        font-weight: 500;
    }
`

export const MenuMobileLink = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        color: ${({ theme }) => theme.white};
        font-size: 2rem;
        font-weight: 700;

        border-bottom: 4px solid transparent;

        &:hover {
            border-bottom: 4px solid ${({ theme }) => theme["gray-400"]};
            border-radius: 4px;
            transition: ease-in .2s;
        }
    }
    
`