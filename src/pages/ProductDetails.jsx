import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const findProduct = data.find(product => product._id == id);
                setProduct(findProduct);
            })
    }, [id]);
    const { name, photo, brand_name, price, description, type, rating } = product;
    

return (
    <div className=" max-w-screen-xl mx-auto">
        <div className="flex  gap-5">
            <div className="w-1/2">
                <img className="rounded-lg" src={photo} alt="" />
            </div>
            <div className="flex flex-col w-1/2">
                <div className="flex flex-col flex-grow">
                    <p className="text-2xl"><span className="font-bold">Name:</span> {name}</p>
                    <p className="text-2xl"><span className="font-bold">Brand name:</span> {brand_name}</p>
                    <p className="text-2xl"><span className="font-bold">Price:</span> {price}</p>
                    <p className="text-2xl"><span className="font-bold">Details:</span> {description}</p>
                    <p className="text-2xl"><span className="font-bold">Type:</span> {type}</p>
                    <p className="text-2xl"><span className="font-bold">Rating:</span> {rating}</p>
                </div>
                <div>
                    <button className="border-4 border-slate-900 hover:border-fuchsia-500 p-5 w-full text-xl font-bold hover:text-fuchsia-500 rounded-lg text-slate-900">Add to cart</button>
                </div>
            </div>
        </div>

    </div>
);
};

export default ProductDetails;