import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import NavBar from "../components/NavBar";


const MyCart = () => {
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        fetch('https://my-brand-shop-server-mvzb6r7dq-abrars-projects-bbcef6d7.vercel.app/cartProducts')
            .then(res => res.json())
            .then(data => setCartItems(data))
    }, [])
    return (
        <div className=" max-w-screen-xl mx-auto mt-2">
            <div className='bg-blue-950 rounded-lg mb-5'>
            <NavBar></NavBar>
            </div>
            <div>
                {
                    cartItems.length == 0 ? <div className="flex text-center items-center justify-center h-[70vh]">
                        <h2 className="text-4xl">No products in cart</h2>
                    </div>
                        : <div className="max-w-screen-xl  mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5">
                            {
                                cartItems.map(item => <CartItem key={item._id} setCartItems={setCartItems} cartItems={cartItems} item={item}></CartItem>)
                            }
                        </div>

                }
            </div>
        </div>
    );
};

export default MyCart;