import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductDetailsForCart from "../components/ProductDetailsForCart";

const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const findProduct = data.find(product => product._id == id);
                setProduct(findProduct);
            })
    }, [id]);
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/cartProducts')
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