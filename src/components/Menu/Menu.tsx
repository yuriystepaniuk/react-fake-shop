import React from "react"
import Button from "@mui/material/Button"
import "./Menu.scss"

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <div className="menu">
                <Button color="inherit">Home</Button>
                <Button color="inherit">Episodes</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
            </div>
        </>
    )
}

export default Menu
