import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function ProductDetail(){

    const {id} = useParams();
    let {state} = useLocation();
    let {itemId,pname} = state;

    return (
        <>
            <p>Inside product component {itemId} {pname}</p>
        </>
    )

}

export default ProductDetail;