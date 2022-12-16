import Hero from '../../../../assets/images/hero.svg' 
import { MainContainer, MainContentImage, MainContentText } from './styles'

export const Main = () => {
    return (
        <MainContainer>
            <MainContentText>
                <h1>Discover Most Suitable Watches</h1>
                <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
            </MainContentText>
            <MainContentImage>
                <img src={Hero} alt="" />
            </MainContentImage>
        </MainContainer>
    )
}