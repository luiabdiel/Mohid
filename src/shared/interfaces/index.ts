export interface IHeaderProps {
    setMenuIsVisible: (active: boolean) => void
}

export interface IMobileMenuProps {
    menuIsVisible: boolean
    setMenuIsVisible: (active: boolean) => void
}

export interface IMenuMobileContainerProps {
    isVisible: boolean
}

export interface IBrandsProps {
    brands: string
    description: string
    image: string
    id: number
}