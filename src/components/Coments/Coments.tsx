import { Grid } from "@mui/material"
import React from "react"
import "./Coments.scss"
import OneComent from "./OneComent"

type CommentProps = {
    star: number
    comment: string
    autor: string
}

type Props = {}

const Coments = (props: Props) => {
    return (
        <>
            <Grid
                className="comments-block"
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid  item xs={12} sm={6} md={4}>
                    <OneComent />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <OneComent />
                </Grid>
                <Grid  item xs={12} sm={6} md={4}>
                    <OneComent />
                </Grid>
                <Grid  item xs={12} sm={6} md={4}>
                    <OneComent />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <OneComent />
                </Grid>
                <Grid  item xs={12} sm={6} md={4}>
                    <OneComent />
                </Grid>
            </Grid>
        </>
    )
}

export default Coments
