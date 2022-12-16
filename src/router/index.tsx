import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home, Profile, ShoppingCart } from "../pages"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/shoppingCart" element={<ShoppingCart />} />

                <Route path='/' element={<Navigate to="/" replace />} />

                <Route path='*' element={<h1>Essa página não existe</h1>} />
            </Routes>
        </BrowserRouter>
    )
}