import { Grid, Typography } from "@mui/material"
import React from "react"
import ProductListItem from "./ProductListItem"
import productsArray from "./productsArray"

type ProductProps = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}
type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                sx={{
                    margin: "25px 0",
                    textTransform: "uppercase",
                }}
            >
                ProductLists
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                {/* <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="Iphone X"
                        description="This is Iphone X"
                        type="phone"
                        capacity={64}
                        price={500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="Iphone XS"
                        description="This is Iphone XS"
                        type="phone"
                        capacity={128}
                        price={650}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="Iphone 13"
                        description="This is Iphone 13"
                        type="phone"
                        capacity={256}
                        price={800}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="Iphone 13"
                        description="This is Iphone 13"
                        type="phone"
                        capacity={256}
                        price={800}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="Iphone 13"
                        description="This is Iphone 13"
                        type="phone"
                        capacity={256}
                        price={800}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="Iphone 13"
                        description="This is Iphone 13"
                        type="phone"
                        capacity={256}
                        price={800}
                    />
                </Grid> */}
                
                {productsArray.map(
                (
                    {
                        name,
                        description,
                        type,
                        capacity,
                        price,
                    }: ProductProps,
                    i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <ProductListItem
                            name={name}
                            description={description}
                            type={type}
                            capacity={capacity}
                            price={price}
                        />
                    </Grid>
                )
            )}
            </Grid>  
        </>
    )
}

export default ProductsList
