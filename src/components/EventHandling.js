import React from "react";

function EventHandling(){

    return (
        <>
        <p onCopy={(e)=>e.preventDefault()}>Don't copy this text</p>
        <textarea value="Sample text" onCut={(e)=>e.preventDefault()}></textarea>
        </>
    )
}