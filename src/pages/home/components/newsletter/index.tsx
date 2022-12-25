import ClockNews from '../../../../assets/images/clock-news.svg'

import { FormContainer, NewsletterContainer, NewsletterLeft, NewsletterRight } from "./styles"

export const Newsletter = () => {
    return (
        <NewsletterContainer>
            <NewsletterLeft>
                <h3>Subscribe To Newsletter</h3>
                <p>Get free guide about smart watches daily. </p>
                <FormContainer>
                    <input type="text" placeholder="Enter Email Address"/>
                    <button>Subscribe</button>
                </FormContainer>
            </NewsletterLeft>
            <NewsletterRight>
                <img src={ClockNews} alt="" />
            </NewsletterRight>
        </NewsletterContainer>
    )
}