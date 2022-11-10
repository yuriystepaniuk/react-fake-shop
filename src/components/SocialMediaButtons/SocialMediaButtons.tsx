import React from "react"

type Props = {}

const SocialMediaButtons = (props: Props) => {
    return (
        <>
            <ul>
                <li>
                    <a href="http://">
                        <img src="images/instagram.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="http://">
                        <img src="images/twitter.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="http://">
                        <img src="images/facebook.png" alt="" />
                    </a>
                </li>
            </ul>
        </>
    )

}

export default SocialMediaButtons
