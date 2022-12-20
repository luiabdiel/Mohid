import Clock from '../../../../assets/images/clock-iphone.svg'
import { BrandsContainer, BrandsContent } from './styles'

export const Brands = () => {

    return (
        <BrandsContainer>
            <BrandsContent>
                <img src={Clock} alt="" />
                <div>
                    <h1>Apple</h1>
                    <p>Apple is one of the most famous smart watches providing company.</p>
                </div>
            </BrandsContent>
            <BrandsContent>
                <img src={Clock} alt="" />
                <div>
                    <h1>Apple</h1>
                    <p>Apple is one of the most famous smart watches providing company.</p>
                </div>
            </BrandsContent>
                <BrandsContent>
                <img src={Clock} alt="" />
                <div>
                    <h1>Apple</h1>
                    <p>Apple is one of the most famous smart watches providing company.</p>
                </div>
            </BrandsContent>
       </BrandsContainer>
    )
}