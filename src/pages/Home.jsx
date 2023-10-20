import Banner from "../components/Banner";
import BrandCards from "../components/BrandCardSection/BrandCards";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <BrandCards></BrandCards>
        </div>
    );
};

export default Home;