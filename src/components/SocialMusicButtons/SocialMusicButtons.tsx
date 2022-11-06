import React from "react"
import "./SocialMusicButtons.scss"

type Props = {}

const SocialMusicButtons = (props: Props) => {
    return (
        <>
            <ul>
                <li>
                    <a href="#spotify">
                        <img src="images/spotify.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#red-sound">
                        <img src="images/red-sound.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#soundcloud">
                        <img src="images/soundcloud.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#appleposcast">
                        <img src="images/applepodcast.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="#radio">
                        <img src="images/radio.png" alt="" />
                    </a>
                </li>
            </ul>
        </>
    )
}

export default SocialMusicButtons