import { Container } from "@mui/system"
import React from "react"
import "./Footer.scss"
import { Button, Grid } from "@mui/material"
import SocialMediaButtons from "components/SocialMediaButtons/SocialMediaButtons"
import Menu from "components/Menu/Menu"
import SocialMusicButtons from "components/SocialMusicButtons/SocialMusicButtons"

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <footer>
                <Container className="container">
                    <Grid
                        className="grid-container"
                        container
                        direction="row"
                        justifyContent="space-evently"
                        spacing={2}
                    >
                        <Grid className="first-fotter-block" item md={3}>
                            <div>
                                <span>Castaway</span>
                                <SocialMediaButtons />
                            </div>
                        </Grid>
                        <Grid item className="second-fotter-block " md={3}>
                            <Button color="inherit">Home</Button>
                            <Button color="inherit">Episodes</Button>
                            <Button color="inherit">About</Button>
                            <Button color="inherit">Contact</Button>
                        </Grid>
                        <Grid item className="third-fotter-block" md={3}>
                            <Button color="inherit">Style Guide</Button>
                            <Button color="inherit">Instructions</Button>
                            <Button color="inherit">Changelog</Button>
                            <Button color="inherit">Credit</Button>
                            <Button color="inherit">Powered by Webflow</Button>
                            <Button color="inherit">Licenses</Button>
                        </Grid>
                        <Grid>
                          <SocialMusicButtons/>
                        </Grid>
                    </Grid>
                </Container>
            </footer>
        </>
    )
}

export default Footer
