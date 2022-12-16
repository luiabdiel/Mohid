import styled from "styled-components";

export const HeaderContainer = styled.div`
    max-width: 68.75rem;
    width: 100%;
    height: 4.375rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-inline: 1rem;

    margin-bottom: 70px;

    svg {
        color: ${({ theme }) => theme.white};
    }

    @media (max-width: 768px){
        padding-inline: 1rem;
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    span {
        color: ${({ theme }) => theme.white};
        font-weight: 500;
    }
`

export const NavbarContainer = styled.nav`
    ul {
        display: flex;
        gap: 1.6875rem;
    }

    @media (max-width: 768px){
        display: none;
    }
`

export const NavbarLink = styled.li`
    a {
        color: ${({ theme }) => theme["gray-400"]};

        &:hover {
            color: ${({ theme }) => theme.white};
            transition: .1s;
        }
    }
`

export const ContainerIcons = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 768px){
        display: none;
    }
`

export const OpenMenuMobile = styled.div`
   @media (min-width: 768px){
        display: none;
    }
`