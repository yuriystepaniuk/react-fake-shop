import React from "react"
import "./SocialMusicButtons.scss"

type Props = {}

const SocialMusicButtons = (props: Props) => {
    return (
        <>
            <ul>
                <li>
                    <a href="http://">
                        <img src="images/spotify.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="http://">
                        <img src="images/red-sound.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="http://">
                        <img src="images/soundcloud.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="http://t">
                        <img src="images/applepodcast.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="http://">
                        <img src="images/radio.png" alt="" />
                    </a>
                </li>
            </ul>
        </>
    )
}

export default SocialMusicButtons