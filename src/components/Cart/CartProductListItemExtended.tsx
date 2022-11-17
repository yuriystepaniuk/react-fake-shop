import { Button, Card, CardContent, Grid } from "@mui/material"
import { Product } from "components/Products/productsArray"
import "./CartProductListItemeExtended.scss"
import DeleteIcon from "@mui/icons-material/Delete"
import Quantity from "components/Quantity/Quantity"

type Props = {
    product: Product
    productCount: number
    changeProductQuantity: (id: number, count: number) => void
}

const CartProductListItemExtended = ({
    product,
    productCount,
    changeProductQuantity,
}: Props) => {
    return (
        <Grid item xs={12} sm={4} sx={{ margin: "30px 0" }}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.name}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        minCount={0}
                        count={productCount}
                        onDecrementClick={() => 
                            changeProductQuantity(product.id, productCount - 1)
                        }
                        onIncrementClick={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                    />
                    {/* onClick={()=> removeProductFromCart(product.id)} */}
                    <Button variant="outlined"
                     >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
