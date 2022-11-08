import { Container } from "@mui/material"
import React from "react"
import { Route, Routes } from "react-router-dom"
import CartPage from "pages/Cart/CartPage"
import Home from "pages/Home/Home"

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: {[id: number]: number}
}

const Main = ({ addProductToCart, productsInCart }: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
            <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="cart"
                        element={<CartPage productsInCart={productsInCart} />}
                    />
                </Routes>
            </Container>
        </main>
    )
}

export default Main
