import React from "react"
import "./Coments.scss"

type Props = {}

const OneComent = (props: Props) => {
    return (
        <div className="item-block">
            <div className="star">..</div>
            <p className="description-comment">
                I can’t recommend this podcast enough
            </p>
            <h6 className="autor-comment">Betty Lacey</h6>
        </div>
    )
}

export default OneComent
