import { useState } from "react"
import { ThemeProvider } from "styled-components"

import { Header, MenuMobile } from "../../shared/components"

import { defaultTheme, GlobalStyle } from "../../styles"
import { Main } from "./components/main"
import { Brands } from "./components/brands"

import { HomeContainer, OurClockGrid } from "./styles"

export const Home = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
                <HomeContainer>
                    <MenuMobile 
                        menuIsVisible={menuIsVisible}
                        setMenuIsVisible={setMenuIsVisible}
                    />
                    <Header 
                        setMenuIsVisible={setMenuIsVisible}
                    />
                    <Main />
                </HomeContainer>
                <OurClockGrid>
                    <Brands />
                    <Brands />
                    <Brands />
                </OurClockGrid>
        </ThemeProvider>
    )
}