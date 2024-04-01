function Cart(){
    let cart = [];
    return (
        <div>
            <ul>
                {cart.map((item,index)=>{
                    return <li key={index}>{item.name}</li>
                })}
            </ul>
        </div>
    );
}
export default Cart;