import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";
import "./BrandCards.css"

const BrandCards = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);
    return (
        <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl lg:text-6xl font-bold border-b-4 border-b-[#F72798] my-8 text-white text-center">Popular Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 p-2">
            {
                brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
            }
        </div>
        </div>
    );
};

export default BrandCards;