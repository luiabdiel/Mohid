import Clock from '../../../../assets/images/clock.svg'
import { BrandsContainer } from './styles'

export const Brands = () => {
    return (
        <BrandsContainer>
            <img src={Clock} alt="" />
            <div>
                <h1>Apple</h1>
                <p>Apple is one of the most famous smart watches providing company.</p>
            </div>
        </BrandsContainer>
    )
}