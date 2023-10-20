import Marquee from "react-fast-marquee";
const NoProducts = () => {
    return (
        
            <div className="max-w-screen-xl mx-auto flex justify-center items-center h-[80vh]">
                <Marquee pauseOnHover={true} speed={100}><h2 className="text-5xl my-10 font-bold text-red-500">Sorry, there is no products available</h2></Marquee>
            </div>
        
    );
};

export default NoProducts;