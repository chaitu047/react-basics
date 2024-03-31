import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail(){

    const {id} = useParams();

    return (
        <>
            <p>Inside product component {id}</p>
        </>
    )

}

export default ProductDetail;