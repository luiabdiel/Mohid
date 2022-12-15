import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path='/' element={<Navigate to="/" replace />} />

                <Route path='*' element={<h1>Essa página não existe</h1>} />
            </Routes>
        </BrowserRouter>
    )
}