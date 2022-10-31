import { Container } from "@mui/material"
import Coments from "components/Coments/Coments"
import LatestEpisodes from "components/LatesEpisodes/LatestEpisodes"
import Slider from "components/Slider/Slider"
import Subscribe from "components/Subscribe/Subscribe"
import Home from "pages/Home/Home"
import React from "react"

type Props = {}

const Main = (props: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
                <Home />
                <Slider/>
                <LatestEpisodes/>
                <Subscribe/>
                <Coments/>
            </Container>
        </main>
    )
}

export default Main
