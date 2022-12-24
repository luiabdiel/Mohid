import { useState } from "react"
import { ThemeProvider } from "styled-components"

import { Header, MenuMobile } from "../../shared/components"

import { defaultTheme, GlobalStyle } from "../../styles"
import { Brands } from "./components/brands"
import { Main } from "./components/main"
import { Products } from "./components/products"
import { Reviews } from "./components/reviews"

import { HomeContainer } from "./styles"

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
                <Brands />
                <Products />
                <Reviews />
        </ThemeProvider>
    )
}