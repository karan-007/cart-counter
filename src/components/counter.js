import React from 'react';
import Buttons from './buttons';

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
            {count}
            <p>Total Items:{props.total}</p>
            <p>
                <button onClick={props.onReload}>Reload</button>
                <button onClick={props.onReset}>Reset</button>
            </p>
        </div>
    )
}

export default counter;
