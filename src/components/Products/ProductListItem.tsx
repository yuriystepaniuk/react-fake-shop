import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'

type Props = {}

const ProductListItem = (props: Props) => {
  return <Card>
    <CardContent>
        <h4>Iphone X</h4>
        <p>This is description</p>
        <div>Type: phone</div>
        <div>Capacity: 64 Gb</div>
        <div>Price: 500$</div>
    </CardContent>
    <CardActions>
        <Button>Add to cart</Button>
    </CardActions>
  </Card>
}

export default ProductListItem