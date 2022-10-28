import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from "@mui/material"
import { green } from "@mui/material/colors"
import { minHeight } from "@mui/system"
import React, { Component } from "react"
import "./ProductListItem.scss"

type Props = {
    name: string
    description: string
    type: string
    capacity: number
    price: number
    image: string
}
type State = {
    count: number
    color: string
    isToggleOn: boolean
    maxCount: number
    minCount: number
}




class ProductListItem extends Component<Props, State> {
    // constructor(props: Props) {
    //     super(props)
    //     this.onIncrementClick = this.onIncrementClick.bind(this)
    //     this.onDecrementClick = this.onDecrementClick.bind(this)
    // }
    state = {
        count: 1,
        color: "green",
        isToggleOn: true,
        maxCount: 5,
        minCount: 1
    }

// + - button
    onIncrementClick = () => {
        console.log(this)
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
        }))
    }
    onDecrementClick = () => {
        console.log(this)
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
    }

// change color
    changeColor() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    //   changeColor = () => {
    //     this.setState((prevState: State) => ({
    //         color: prevState.color === "green" ? "red" : "green",
    //     }))
    // }
      

    render() {
        const { image, name, description, type, capacity, price }: Props =
            this.props
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
                    <div className="product-features">
                        Capacity: {capacity} Gb
                    </div>
                    <div className="products-price">Price: {price} $</div>
                    <div>
                        <p>Color: {this.state.isToggleOn ? 'Green' : 'Red'}</p>
                        <button onClick={() => this.changeColor()}>Change color</button>
                    </div>
                    <div className="product-quantity">
                        <Button
                            variant="contained"
                            size="small"
                            disabled={this.state.count <= this.state.minCount}
                            onClick={() => this.onDecrementClick()}
                        >
                            -
                        </Button>
                        <TextField
                            size="small"
                            value={this.state.count}
                            variant="outlined"
                        ></TextField>
                        <Button
                            variant="contained"
                            size="small"
                            disabled={this.state.count >= this.state.maxCount}
                            onClick={() => this.onIncrementClick()}
                        >
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
