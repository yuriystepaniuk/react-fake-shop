import { Button } from "@mui/material"
import React from "react"
import Episode from "./Episode"
import "./LatestEpisodes.scss"

type Props = {}

const LatestEpisodes = (props: Props) => {
    return (
        <div className="latest-episodes">
            <div className="title-header">
                <h1>Latest episodes</h1>
                <Button className="btn">View all episodes</Button>
            </div>
            <div className="content">
                <Episode />
                <Episode />
                <Episode />
            </div>
        </div>
    )
}

export default LatestEpisodes
