import React from "react"
import Button from "@mui/material/Button"

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Episodes</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
        </>
    )
}

export default Menu
