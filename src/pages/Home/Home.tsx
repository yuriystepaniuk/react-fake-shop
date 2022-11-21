import ProductsList from "components/Products/ProductsList"
import Reviews from "components/Reviews/Reviews"
import React from "react"

type Props = {
    addProductToCart: (id: number, count: number) => void
    toggleLikeState: (id: number) => void
    productsLikeState: {
        [id: number]: boolean
    }
}

const Home = ({
    addProductToCart,
    productsLikeState,
    toggleLikeState,
}: Props) => {
    return (
        <>
            <ProductsList
                addProductToCart={addProductToCart}
                productsLikeState={productsLikeState}
                toggleLikeState={toggleLikeState}
            />
            <Reviews />
        </>
    )
}

export default Home
