function Purchase(){
    let products = [
        {pname:"Apple",price:20},
        {pname:"Banana",price:30},
        {pname:"Custard Apple",price:12},
        {pname:"Dosakaya",price:10},
        {pname:"Endrikkaya",price:50}
    ];

    return (
        <>
        <div>
            <select>

                {products.map((product,index) => {
                   return <option key={index} value={product.price}>{product.pname}</option>
                })}
                
            </select>
        </div>
        </>
    );
}

export default Purchase;