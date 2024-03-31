import React from "react";
import {Routes, Route, Link} from 'react-router-dom';

function Products(){

    return (
        <>
        <ul>
            <li><Link to='/products/1'>Apple</Link></li>
            <li><Link to='/products/2'>Banana</Link></li>
            <li><Link to='/products/3'>Carrot</Link></li>
            <li><Link to='/products/4'>Dosakaya</Link></li>
        </ul>
        </>
    )

}

export default Products;