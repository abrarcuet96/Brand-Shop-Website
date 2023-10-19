import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";


const BrandCards = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);
    console.log(brands);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {
                brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
            }
        </div>
    );
};

export default BrandCards;