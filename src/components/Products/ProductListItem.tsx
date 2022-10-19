import { Button, Card, CardActions, CardContent } from "@mui/material"
import React from "react"
import "./ProductListItem.scss"

type Props = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent className="product">
                <h4>{props.name}</h4>
                <p className="product-description">{props.description}</p>
                <div className="product-features">
                    <span>Capacity:</span> {props.type}{" "}
                </div>
                <div className="product-features">
                    Capacity: {props.capacity} Gb
                </div>
                <div className="products-price">Price: {props.price} $</div>
            </CardContent>
            <CardActions className="btn-wrap">
                <Button variant="outlined" className="btn">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
