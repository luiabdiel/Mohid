import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Clock from '../../../../assets/images/clock-iphone.svg'
import { IBrandsProps } from '../../../../shared/interfaces'

import { BrandsContainer, BrandsContent } from './styles'

export const Brands = () => {
    const [data, setData] = useState<IBrandsProps []>([])

    useEffect(() => {
        fetch('http://localhost:3333/brands')
        .then((response) => response.json())
        .then(setData)
    }, [])

    return (
        <BrandsContainer>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 0.5,
                        spaceBetween: 0,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    745: {
                        slidesPerView: 1.5,
                        spaceBetween: 5,
                    },
                    740: {
                        slidesPerView: 1.5,
                        spaceBetween: 5,
                    },
                    1000: {
                        slidesPerView: 1.5,
                        spaceBetween: 5,
                    },
                    1500: {
                        slidesPerView: 2.5,
                        spaceBetween: 5,
                    },
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true,  }}
            >
                {data.map(({ brands, description, id }) => {
                    return (
                        <SwiperSlide key={id}>
                            <BrandsContent>
                                <img src={Clock} alt="" />
                                <div>
                                    <h1>{brands}</h1>
                                    <p>{description}</p>
                                </div>
                            </BrandsContent>
                        </SwiperSlide>
                    )
            })}
      
    </Swiper>
       </BrandsContainer>
    )
}