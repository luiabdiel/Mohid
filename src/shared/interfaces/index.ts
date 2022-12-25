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
    description?: string
    id: number
}

export interface IProductsProps {
    name: string 
    price: number
    oldPrice: number
    id: number
}

export interface IReviewsProps {
    title: string
    description: string
}