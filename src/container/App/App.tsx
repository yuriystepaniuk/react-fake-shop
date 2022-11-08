import React, { useState } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Header from "container/Header/Header"
import Main from "container/Main/Main"
import Footer from "container/Footer/Footer"
import { StyledEngineProvider } from "@mui/material"
import "style/style.scss"

type Props = {}

type AppProps = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<AppProps>({
        1: 5,
        2: 5,
    })

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState: AppProps) => {
            let prevProductsInCart = { ...prevState }
            delete prevProductsInCart[id]
            return prevProductsInCart
        })
    }

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: AppProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header
                productsInCart={productsInCart}
            />
            <button onClick={() => removeProductFromCart(1)}>Delete</button>
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
            />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
