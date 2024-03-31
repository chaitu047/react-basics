import React from "react";
import Home from './Home';
import Detail from './Detail';
import About from './About';
import Products from './Products'
import {Routes, Route, Link} from 'react-router-dom';
import ProductDetail from "./ProductDetails";

function HandleRoutes() {
    return(
        <>
        <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Detail">Detail</Link></li>
            <li><Link to="/Products">Products</Link></li>
        </ul>
        <Routes>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Detail" element={<Detail />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/Products/:id" element={<ProductDetail />}></Route>
        </Routes>
        </>
    )
}

export default HandleRoutes;