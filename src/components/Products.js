import React, {useState} from "react";
import {Link, Outlet} from 'react-router-dom';

function Products(){

    let [products,setProducts] = useState([
        {id:1,pname:"Apple"},
        {id:2,pname:"Banana"},
        {id:3,pname:"Carrot"},
        {id:4,pname:"Dogfruit"},
        {id:5,pname:"Elonmusk"},
    ]);

    return (
        <>
        <ul>
            {products.map(item => {
                let {id,pname} = item;
                return <li><Link to={`/products/${id+1}`}>{pname}</Link></li>;
            })};
        </ul>
        <Outlet />
        </>
    )

}

export default Products;