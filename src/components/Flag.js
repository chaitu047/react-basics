import React from "react";

function Counter(props){
    return (
        <div>
            <label>Flag - {props.value.toString()}</label>
        </div>
    )
}

export default React.memo(Counter);