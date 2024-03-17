const AboutUs = () => {
    return (
        <div className="flex justify-center my-20 text-center">
            <div className="relative">
                <img className="w-[400px] opacity-50" src="au3.jpg" alt="" />
            </div>
            <div className="absolute max-w-screen-xl">
                <h2 className="text-7xl text-[#F72798] font-bold my-10">Why Choose Us?</h2>
                <p className="font-extrabold text-white my-10 text-6xl ">Infinite Need <br />One Solution</p>
                <p className="text-white font-semibold text-xl my-10 text-center">At BrandShop, we are your ultimate destination for all things electronic, offering a seamless fusion of top-notch quality, unparalleled variety, and exceptional service. With a carefully curated selection of cutting-edge products, competitive pricing, and expert guidance from our dedicated team, we ensure that every purchase exceeds your expectations. Our commitment to customer satisfaction drives us to provide a shopping experience that is as effortless as it is rewarding. Choose us, and elevate your electronic journey to new heights.</p>
            </div>
        </div>
    );
};

export default AboutUs;