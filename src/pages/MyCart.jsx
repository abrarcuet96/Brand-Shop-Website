import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";


const MyCart = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cartProducts')
            .then(res => res.json())
            .then(data => setCartItems(data))
    }, [])
    return (
        <div>
            <div className="max-w-screen-xl  mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5">
                {
                    cartItems.map(item => <CartItem key={item._id} setCartItems={setCartItems} cartItems={cartItems} item={item}></CartItem>)
                }
            </div>
        </div>
    );
};

export default MyCart;