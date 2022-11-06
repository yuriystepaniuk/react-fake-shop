import { Container } from "@mui/material"
import AboutAutor from "components/AboutAutor/AboutAutor"
import Coments from "components/Coments/Coments"
import LatestEpisodes from "components/LatesEpisodes/LatestEpisodes"
import Slider from "components/Slider/Slider"
import Subscribe from "components/Subscribe/Subscribe"
import Home from "pages/Home/Home"
import React from "react"
import "./Main.scss"

type Props = {
}

const Main = (props: Props) => {
    return (
        <main>
            <Container className="container">
                <Home />
                <Slider/>
                <LatestEpisodes/>
                <AboutAutor/>
                <Subscribe/>
                <Coments/>
            </Container>
        </main>
    )
}

export default Main
