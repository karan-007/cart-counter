import React from 'react'
import "./buttons.css"

function buttons(props) {
    return (
        <div className="Counter">
            <span>{props.value}</span>
            <button className="Button ButtonPlus" onClick={() => props.onAdd(props.id)}>+</button>
            <button className="Button ButtonMinus" onClick={() => props.onMinus(props.id)}>-</button>
            <button className="Button ButtonDelete" onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )
}

export default buttons
