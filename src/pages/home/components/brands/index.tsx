import { useEffect, useState, useRef } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import Clock from '../../../../assets/images/clock-iphone.svg'
import { IBrandsProps } from '../../../../shared/interfaces'

import { BrandsContainer, BrandsContent, ButtonbrandsCarousel } from './styles'

export const Brands = () => {
    const [data, setData] = useState<IBrandsProps []>([])
    const brandsCarousel = useRef(null)

    useEffect(() => {
        fetch('http://localhost:3333/clock')
        .then((response) => response.json())
        .then(setData)
    }, [])

    function handleLeftClick (e: React.SyntheticEvent) {
        e.preventDefault()
        brandsCarousel.current.scrollLeft -= brandsCarousel.current.offsetWidth
    }
    
    function handleRightClick (e: React.SyntheticEvent) {
        e.preventDefault()
        console.log(e.screenX)
    }

    return (
        <BrandsContainer ref={brandsCarousel}>
            <ButtonbrandsCarousel onClick={handleLeftClick}>
                <AiOutlineArrowLeft />
            </ButtonbrandsCarousel>
            {data.map(({ brands, description, id}) => {
                return (
                    <BrandsContent key={id}>
                        <img src={Clock} alt="" />
                        <div>
                            <h1>{brands}</h1>
                            <p>{description}</p>
                        </div>
                    </BrandsContent>
                )
            })}
            <ButtonbrandsCarousel onClick={handleRightClick}>
                <AiOutlineArrowRight />
            </ButtonbrandsCarousel>
       </BrandsContainer>
    )
}