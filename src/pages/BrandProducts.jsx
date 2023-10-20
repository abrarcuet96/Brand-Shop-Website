import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandCollections from "../components/BrandCollections";
import NoProducts from "../components/NoProducts";


const BrandProducts = () => {
    const { id } = useParams();
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
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                const filteredItems = data.filter(product => product.brand_name == brand.brand_name);
                setProducts(filteredItems);
            });
    }, [brand.brand_name])


    return (
        <div>
            {
                products.length<=0 ? '':
                <div className="my-5 max-w-screen-xl mx-auto">

                <div className="carousel w-full h-[80vh]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/L0zZn8G/bags-with-gifts-top-copy-space.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/Jskqn63/modern-stationary-collection-arrangement.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/tYX3Yyg/workplace-business-modern-male-accessories-laptop-black-background.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/BG5gzzJ/fabulous-life-shopping-online-feminine.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </div>
            }
            

                {products.length <= 0 ? <NoProducts></NoProducts>
                    :
                    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 max-w-screen-xl mx-auto">
                        {
                            products.map(product => <BrandCollections key={product._id} product={product}></BrandCollections>)
                        }
                    </div>
                }
            
        </div>
    );
};

export default BrandProducts;