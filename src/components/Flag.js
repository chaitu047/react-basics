import React from "react";

export default function Counter(props){
    return (
        <div>
            <label>Flag - {props.value.toString()}</label>
        </div>
    )
}