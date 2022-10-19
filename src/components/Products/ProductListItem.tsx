import { Button, Card, CardActions, CardContent } from "@mui/material"
import React from "react"
import classes from "./ProductListItem.module.css"

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
            <CardContent>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <div>Capacity: {props.type} </div>
                <div>Capacity: {props.capacity} Gb</div>
                <div>Price: {props.price} $</div>
            </CardContent>
            <CardActions className={`${classes["btn-wrap"]}`}>
                <Button variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
