import { Button } from "@mui/material"
import React from "react"
import "./LatestEpisodes.css"

type Props = {}

const LatestEpisodes = (props: Props) => {
    return (
        <>
            <div className="title-header">
                <h1>Latest Episodes</h1>
                <Button className="btn">View all episodes</Button>
            </div>
        </>
    )
}

export default LatestEpisodes
