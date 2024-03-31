import React from "react";

function Counter(props){
    return (
        <div>
            <label>Count - {props.value}</label>
        </div>
    )
}

export default React.memo(Counter);