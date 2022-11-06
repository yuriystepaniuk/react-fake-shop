import { Grid } from "@mui/material"
import SocialMusicButtons from "components/SocialMusicButtons/SocialMusicButtons"
import React from "react"
import "./Slider.scss"

type Props = {}

const Slider = (props: Props) => {
    return (
        <>
            <Grid
                className="slider"
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid className="photo-slider" item xs={12} sm={12} md={6}>
                    <img
                        className="photo-amination"
                        src="images/photo-slider.png"
                        alt="Photo amination"
                    />
                    <img src="images/autor.png" alt="Autor" />
                </Grid>
                <Grid className="text-slider" item xs={12} sm={12} md={6} lg={6}>
                    <h2>
                        Take your podcast to the{" "}
                        <span className="next-word">next</span>{" "}
                        <span className="level-word">level</span>
                    </h2>
                    <div className="social-slider">
                        <p>Listen on</p>
                        <SocialMusicButtons/>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Slider
