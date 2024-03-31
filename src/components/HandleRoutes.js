import React from "react";
import Home from './Home';
import Detail from './Detail';
import About from './About';
import {Routes, Route} from 'react-router-dom';

function HandleRoutes() {
    return(
        <>
        <ul>
            <li><a href="/Home">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Detail">Detail</a></li>
        </ul>
        <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Detail" element={<Detail />}></Route>
        </Routes>
        </>
    )
}

export default HandleRoutes;