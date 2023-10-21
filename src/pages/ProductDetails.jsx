import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductDetailsForCart from "../components/ProductDetailsForCart";

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch('https://my-brand-shop-server-bgw2wftzx-abrars-projects-bbcef6d7.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                const findProduct = data.find(product => product._id == id);
                setProduct(findProduct);
            })
    }, [id]);
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        fetch('https://my-brand-shop-server-bgw2wftzx-abrars-projects-bbcef6d7.vercel.app/cartProducts')
            .then(res => res.json())
            .then(data => setCartItems(data));
    }, [])
    console.log(cartItems);

    return (
        <div>
            {
                <ProductDetailsForCart key={id} product={product} cartItems={cartItems} setCartItems={setCartItems}></ProductDetailsForCart>
            }
        </div>
    );
};

export default ProductDetails;