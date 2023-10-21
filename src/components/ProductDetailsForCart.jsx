import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import HandleAddToCart from './HandleAddToCart';
const ProductDetailsForCart = ({product, cartItems, setCartItems}) => {
    const { name, photo, brand_name, price, description, type, rating } = product;
    const handleAddToCart = (product) => {
        
        const isExist = cartItems.find(item => item.name == product.name);
        console.log(isExist);
        
        if (isExist) {
            Swal.fire({
                title: 'Stop!!',
                text: 'Product is already in the cart',
                icon: 'warning',
                confirmButtonText: 'OK'})
        } else {
            const { name, photo, brand_name, price, description, type, rating } = product;
            const myProducts = { name, photo, brand_name, price, description, type, rating };
            fetch('http://localhost:5000/cartProducts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(myProducts)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        Swal.fire({
                            title: 'success!',
                            text: 'Product added to cart successfully',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                    }
                    setCartItems([...cartItems,myProducts]);
                   
                });
        }

    }
    return (
        <div className=" max-w-screen-xl mx-auto mb-10 h-[70vh]">
            <div className="flex gap-5 flex-col lg:flex-row">
                <div className="lg:w-1/2">
                    <img className="rounded-lg" src={photo} alt="" />
                </div>
                <div className="flex flex-col lg:w-1/2">
                    <div className="flex flex-col mb-2 flex-grow">
                        <p className="text-xl lg:text-2xl"><span className="font-bold">Name:</span> {name}</p>
                        <p className="text-xl lg:text-2xl"><span className="font-bold">Brand name:</span> {brand_name}</p>
                        <p className="text-xl lg:text-2xl"><span className="font-bold">Price:</span> {price}</p>
                        <p className="text-xl lg:text-2xl"><span className="font-bold">Details:</span> {description}</p>
                        <p className="text-xl lg:text-2xl"><span className="font-bold">Type:</span> {type}</p>
                        <p className="text-xl lg:text-2xl"><span className="font-bold">Rating:</span> {rating}</p>
                    </div>
                    {
                        <HandleAddToCart handleAddToCart={handleAddToCart} product={product}></HandleAddToCart>
                    }
                </div>
            </div>

        </div>
    );
};
ProductDetailsForCart.propTypes = {
    product: PropTypes.object,
    cartItems: PropTypes.array,
    setCartItems: PropTypes.func
}
export default ProductDetailsForCart;