import React from "react";
import "./card.css"

function getColor(value) {
    if (value.red) return "red"
    if (value.green) return "green"
    if (value.blue) return "blue"
    if (value.purple) return "purple"
    return ""
}

const Card = (props) => {

    return (
        <div className={`card ${getColor(props)}`}>
            <div className="header red">
                <span className="title">{props.title}</span>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Card;