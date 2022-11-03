import React from "react"
import "./AboutAutor.scss"
import { Button } from "@mui/material"

type Props = {}

const AboutAutor = (props: Props) => {
    return (
        <>
            <div className="about-autor">
                <div className="text-info">
                    <Button className="circle"></Button>
                    <h5>Meet your host</h5>
                    <h2>Jacob Paulaner</h2>
                    <p>
                        Jacob has a background in audio engineering, and has
                        been podcasting since the early days.
                    </p>
                    <p>
                        He’s here to help you level up your game by sharing
                        everything he’s learned along the way.
                    </p>
                </div>
                <img src="images/JacobPaulaner.png" alt="Jacob Paulaner" />
            </div>
        </>
    )
}

export default AboutAutor
