import { Grid } from "@mui/material"
import React from "react"
import "./Coment.scss"

type CommentProps ={
  star: number
  comment: string
  autor: string
}

type Props = {}

const Coments = (props: Props) => {
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <div className="star"></div>
                <p className="description-comment"></p>
                <h6 className="autor-comment"></h6>
            </Grid>
        </>
    )
}

export default Coments
