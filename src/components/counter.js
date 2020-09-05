import React from 'react';
import Buttons from './buttons';
import './counter.css';

function counter(props) {
    let count = props.counters.map((counter) => {
        return <Buttons
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onAdd={props.onAdd}
            onMinus={props.onMinus}
            onTotalAdd={props.onTotalAdd}
            onDelete={props.onDelete} />
    })
    return (
        <div>
            <h1>CART COUNTER</h1>
            {count}
            <p className="total">Total Items:{props.total}</p>
            <p>
                <button className="reloadBtn" onClick={props.onReload}>Reload</button>
                <button className="resetBtn" onClick={props.onReset}>Reset</button>
            </p>
        </div>
    )
}

export default counter;
