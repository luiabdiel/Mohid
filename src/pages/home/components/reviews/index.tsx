import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
                <Swiper
                    slidesPerView={2}
                    spaceBetween={0}
                    slidesPerGroup={2}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 0.5,
                            spaceBetween: 0,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        745: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                        },
                        740: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                        },
                        860: {
                            slidesPerView: 1.5,
                            spaceBetween: 10,
                        },
                        1000: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1500: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data.map(({ title, description, id }) => {
                        return (
                            <SwiperSlide key={id}>
                                <ReviewsCardsContainer>
                                    <img src={People} alt="" />
                                    <ReviewsCardsText>
                                        <strong>{title}</strong>
                                        <p>{description}</p>
                                        <img src={Stars} alt="" />
                                    </ReviewsCardsText>
                                </ReviewsCardsContainer>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </ReviewsCards>
        </ReviewsContainer>
    )
}