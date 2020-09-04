import React from 'react'

function buttons(props) {
    return (
        <div>
            <span>{props.value}</span>
            <button onClick={() => props.onAdd(props.id)}>+</button>
            <button onClick={() => props.onMinus(props.id)}>-</button>
            <button onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )
}

export default buttons
