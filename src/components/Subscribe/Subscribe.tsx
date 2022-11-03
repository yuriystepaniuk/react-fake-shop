import { Button } from "@mui/material"
import React from "react"
import "./Subscribe.scss"

type Props = {}

const Subscribe = (props: Props) => {
    return (
        <div className="subscribe">
            <div className="info-text">
                <h5>Email Newsletter</h5>
                <h3>Subscribe for updates</h3>
            </div>
            <div className="input-form">
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <div>
                        <Button className="btn">Submit</Button>
                    </div>
                </form>
            </div>
            <div className="blue-line"></div>
        </div>
    )
}

export default Subscribe
