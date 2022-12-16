import { Link } from 'react-router-dom'
import { BsPersonFill, BsCartFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

import Logo from '../../../assets/images/logo.svg'

import { ContainerIcons, HeaderContainer, LogoContainer, NavbarContainer, NavbarLink, OpenMenuMobile } from './styles'
import { IHeaderProps } from '../../interfaces'

export const Header:React.FC<IHeaderProps> = ({ setMenuIsVisible }) => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <img src={Logo} alt="" />
                <span>Mohid</span>
            </LogoContainer>
            <NavbarContainer>
                <ul>
                    <NavbarLink><Link to="#">Home</Link></NavbarLink>
                    <NavbarLink><Link to="#">Brands</Link></NavbarLink>
                    <NavbarLink><Link to="#">Recent Products</Link></NavbarLink>
                    <NavbarLink><Link to="#">Contact</Link></NavbarLink>
                    <NavbarLink><Link to="#">About</Link></NavbarLink>
                </ul>
            </NavbarContainer>
            <ContainerIcons>
                <BsPersonFill size={22}/>
                <BsCartFill size={22}/>
            </ContainerIcons>
            <OpenMenuMobile>
                <GiHamburgerMenu onClick={() => setMenuIsVisible(true)}  size={22}/>
            </OpenMenuMobile>
        </HeaderContainer>
    )
}