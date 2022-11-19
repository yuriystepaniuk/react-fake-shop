import { Container } from "@mui/material"
import Contact from "pages/Contact/Contact"
import About from "pages/About/About"
import Episodes from "pages/Episodes/Episodes"
import Home from "pages/Home/Home"
import React from "react"
import { Route, Routes } from "react-router-dom"
import "./Main.scss"

type Props = {}

const Main = (props: Props) => {
    return (
        <main>
            <Container className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="episodes" element={<Episodes />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </Container>
        </main>
    )
}

export default Main
