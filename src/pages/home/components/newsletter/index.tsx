import ClockNews from '../../../../assets/images/clock-news.svg'

import { FormContainer, NewsletterContainer, NewsletterContent, NewsletterLeft, NewsletterImage } from "./styles"

export const Newsletter = () => {
    return (
        <NewsletterContainer>
            <NewsletterContent>
                <NewsletterLeft>
                    <h3>Subscribe To Newsletter</h3>
                    <p>Get free guide about smart watches daily. </p>
                    <FormContainer>
                        <input type="text" placeholder="Enter Email Address"/>
                        <button>Subscribe</button>
                    </FormContainer>
                </NewsletterLeft>
                <NewsletterImage>
                    <img src={ClockNews} alt="" />
                </NewsletterImage>
            </NewsletterContent>
        </NewsletterContainer>
    )
}