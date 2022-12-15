import { ThemeProvider } from "styled-components"
import { defaultTheme, GlobalStyle } from "../../shared/styles"

export const Home = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <h1>Home</h1>
        </ThemeProvider>
    )
}