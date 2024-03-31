import React,{ useCallback, useState } from "react";
import Counter from "./Counter";
import Flag from "./Flag";

export default function StateManagement() {
    let [cnt,setCnt] = useState(0);
    let [flag,setFlag] = useState(false);
    
    return (
        <>
        <Counter value={cnt}/>
        <Flag value={flag}/>
        <button onClick={useCallback(()=>setCnt(prev => prev+1))}>Increment</button>
        <button onClick={useCallback(()=>setFlag(prev => !prev))}>ChangeFlag</button>
        </>
    )
}
