import { Button } from "@mui/material"
import React from "react"
import "./Episode.scss"

type Props = {}

const Episode = (props: Props) => {
    return (
        <div className="episode">
            <img src="images/episode-3.png" alt="Episode 3" />
            <div className="information">
                <div className="category">Gear</div>
                <div className="episode-number">Episode 3</div>
                <div className="title">Should you get outboard audio gear?</div>
                <p className="description">Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.</p>
                <Button className="btn">View Episode Details</Button>
            </div>
        </div>
    )
}

export default Episode
