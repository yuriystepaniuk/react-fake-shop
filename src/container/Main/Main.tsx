import { Container } from "@mui/material"
import React from "react"
import { Route, Routes } from "react-router-dom"
import CartPage from "pages/Cart/CartPage"
import Home from "pages/Home/Home"
import AboutPage from "pages/About/AboutPage"
import ShippingPage from "pages/Shipping/ShippingPage"
import PaymentPage from "pages/Payment/PaymentPage"

type Props = {
    addProductToCart: (id: number, count: number) => void
    productsInCart: { [id: number]: number }
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id:number, count: number) => void
}

const Main = ({
    addProductToCart,
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductToCart={addProductToCart} />}
                    />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route
                        path="cart"
                        element={
                            <CartPage
                                productsInCart={productsInCart}
                                removeProductFromCart={removeProductFromCart}
                                changeProductQuantity={changeProductQuantity}
                            />
                        }
                    />
                </Routes>
            </Container>
        </main>
    )
}

export default Main
