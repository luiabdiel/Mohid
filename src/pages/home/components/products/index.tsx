import { useEffect, useState } from 'react'

import Smart from '../../../../assets/images/clock-smart.svg'
import Stars from '../../../../assets/images/stars.svg'
import Cart from '../../../../assets/images/cart.svg'

import { IProductsProps } from '../../../../shared/interfaces'

import { ProductsButtonContainer, ProductsCartIcons, ProductsContainer, ProductsContent, ProductsGrid, ProductsImage, ProductsInfos, ProductsTitle } from "./styles"

export const Products = () => {
    const [data, setData] = useState<IProductsProps []>([])

    useEffect(() => {
        fetch('http://localhost:3333/watches')
        .then((response) => response.json())
        .then(setData)
    }, [])

    return (
        <ProductsContainer>
            <ProductsTitle>
                <span>Find your favourite smart watch.</span>
                <h3>Our Latest Products</h3>
            </ProductsTitle>
            <ProductsGrid>
                {data.map(({ name, oldPrice, price, id}) => {
                    return (
                        <ProductsContent key={id}>
                            <ProductsCartIcons>
                                <img src={Cart} alt="" />
                            </ProductsCartIcons>
                            <ProductsImage>
                                <img src={Smart} alt="" />
                            </ProductsImage>
                            <ProductsInfos>
                                <strong>{name}</strong>
                                <img src={Stars} alt="" />
                                <div>
                                    <del>{`$${oldPrice}.00`}</del>
                                    <strong>{`$${price}.00`}</strong>
                                </div>
                            </ProductsInfos>
                        </ProductsContent>
                    )
                })}
            </ProductsGrid>
            <ProductsButtonContainer>
                <button>View More</button>
            </ProductsButtonContainer>
        </ProductsContainer>
    )
}