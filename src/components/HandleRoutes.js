import React from "react";
import Home from './Home';
import Detail from './Detail';
import About from './About';
import {Routes, Route, Link} from 'react-router-dom';

function HandleRoutes() {
    return(
        <>
        <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Detail">Detail</Link></li>
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