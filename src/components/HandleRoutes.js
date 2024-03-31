import React from "react";
import Home from './Home';
import Detail from './Detail';
import About from './About';

function HandleRoutes() {
    return(
        <>
        <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Detail">Detail</a></li>
        </ul>
         <Home />
         <About />
         <Detail />
        </>
    )
}

export default HandleRoutes;