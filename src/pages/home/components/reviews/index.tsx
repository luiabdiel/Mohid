import { useEffect, useState } from "react"

import People from '../../../../assets/images/people.svg'
import Stars from '../../../../assets/images/stars.svg'
import { IReviewsProps } from "../../../../shared/interfaces"

import { ReviewsCards, ReviewsCardsContainer, ReviewsCardsText, ReviewsContainer, ReviewsTitle } from "./styles"


export const Reviews = () => {
    const [data, setData] = useState<IReviewsProps []>([])

    useEffect(() => {
        fetch("http://localhost:3333/reviews")
        .then((response) => response.json())
        .then(setData)
    }, [])

    return (
        <ReviewsContainer>
            <ReviewsTitle>
                <span>Here are our some of the best clients.</span>
                <h3>What People Say About Us</h3>
            </ReviewsTitle>
            <ReviewsCards>
                {data.map(({ title, description}) => {
                    return (
                        <ReviewsCardsContainer>
                            <img src={People} alt="" />
                            <ReviewsCardsText>
                                <strong>{title}</strong>
                                <p>{description}</p>
                                <img src={Stars} alt="" />
                            </ReviewsCardsText>
                        </ReviewsCardsContainer>
                    )
                })}
            </ReviewsCards>
        </ReviewsContainer>
    )
}