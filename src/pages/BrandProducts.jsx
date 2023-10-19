import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandCollections from "../components/BrandCollections";


const BrandProducts = () => {
    const { id } = useParams();
    console.log(id);
    const [brand, setBrand] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const findBrand = data.find(brand => brand.id == id)
                setBrand(findBrand);
            })
    }, [id])
    console.log(brand);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const filteredItems = data.filter(product => product.brand_name == brand.brand_name);
                setProducts(filteredItems);
            });
    }, [brand.brand_name])
    console.log(products);


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 max-w-screen-xl mx-auto">
            {
                products.map(product => <BrandCollections key={product._id} product={product}></BrandCollections>)
            }
        </div>
    );
};

export default BrandProducts;