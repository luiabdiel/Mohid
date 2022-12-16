import { BsXLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { IMobileMenuProps } from '../../interfaces'

import Logo from '../../../assets/images/logo.svg'

import { LogoContainerMobile, MenuMobileContainer, MenuMobileLink } from './styles'

export const MenuMobile: React.FC<IMobileMenuProps> = ({ menuIsVisible, setMenuIsVisible }) => {
    return (
        <MenuMobileContainer isVisible={menuIsVisible}>
            <LogoContainerMobile>
                <img src={Logo} alt="" />
                <span>Mohid</span>
            </LogoContainerMobile>
            <BsXLg onClick={() => setMenuIsVisible(false)} size={20}/>
            <nav>
                <ul>
                    <MenuMobileLink><Link to="#">Home</Link></MenuMobileLink>
                    <MenuMobileLink><Link to="#">Brands</Link></MenuMobileLink>
                    <MenuMobileLink><Link to="#">Recent Products</Link></MenuMobileLink>
                    <MenuMobileLink><Link to="#">Contact</Link></MenuMobileLink>
                    <MenuMobileLink><Link to="#">About</Link></MenuMobileLink>
                </ul>
            </nav>
        </MenuMobileContainer>
    )
}