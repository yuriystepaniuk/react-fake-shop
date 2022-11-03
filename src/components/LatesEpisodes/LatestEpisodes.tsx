import { Button, Grid } from "@mui/material"
import React from "react"
import Episode from "./Episode"
import "./LatestEpisodes.scss"
import episodesArray from "./EpisodesArray"

type Props = {}

const LatestEpisodes = (props: Props) => {
    return (
        <div className="latest-episodes">
            <div className="title-header">
                <h1>Latest episodes</h1>
                <Button className="btn">View all episodes</Button>
            </div>
            <div className="content">
                {episodesArray.map((episode) => (
                    <Grid item xs={12} sm={12} md={12}>
                        <Episode
                            category={episode.category}
                            episodeNumber={episode.episodeNumber}
                            title={episode.title}
                            description={episode.description}
                            image={episode.image}
                        />
                    </Grid>
                ))}
            </div>
        </div>
    )
}

export default LatestEpisodes
