import React from "react";

function EventHandling(){

    return (
        <>
        <input type='text' onCopy={(e)=>{
            e.preventDefault();}
            } />
        <textarea value="Sample text" onCut={(e)=>{e.preventDefault();}}></textarea>
        </>
    )
}

export default EventHandling;