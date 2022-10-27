import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from "@mui/material"
import React, {Component} from "react"
import "./ProductListItem.scss"

type Props = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}

class ProductListItem extends Component<Props> {
    render() {
        const {image,name,description,type,capacity,price}: Props = this.props
        return (
            <Card>
                <CardContent className="product">
                    <div className="product-image">
                        <img src={image} alt={name} />
                    </div>
                    <h4>{name}</h4>
                    <p className="product-description">{description}</p>
                    <div className="product-features">
                        <span>Capacity:</span> {type}{" "}
                    </div>
                    <div className="product-features">Capacity: {capacity} Gb</div>
                    <div className="products-price">Price: {price} $</div>
                    <div className="product-quantity">
                        <Button variant="contained" size="small">
                            -
                        </Button>
                        <TextField
                            size="small"
                            value="1"
                            variant="outlined"
                        ></TextField>
                        <Button variant="contained" size="small">
                            +
                        </Button>
                    </div>
                </CardContent>
                <CardActions className="btn-wrap">
                    <Button variant="outlined" className="btn">
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default ProductListItem
