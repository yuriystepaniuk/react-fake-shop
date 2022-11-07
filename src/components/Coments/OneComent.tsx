import React from "react"
import "./Coments.scss"

type Props = {
    image: string
    content: string
    autor: string
}

const OneComent = ({ image, content, autor }: Props) => {
    return (
        <div className="item-block">
            <div className="star">
            <img src={image} alt="star" /></div>
            <p className="description-comment">{content}</p>
            <h6 className="autor-comment">{autor}</h6>
        </div>
    )
}

export default OneComent
