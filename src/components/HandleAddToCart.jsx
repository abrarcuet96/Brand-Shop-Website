const HandleAddToCart = ({handleAddToCart, product}) => {
    return (
        <div>
            <button onClick={() => handleAddToCart(product)} className="border-4 border-slate-900 hover:border-fuchsia-500 p-5 w-full text-xl font-bold hover:text-fuchsia-500 rounded-lg text-slate-900">Add to cart</button>
        </div>
    );
};

export default HandleAddToCart;