import Accordian from "../components/Accordian";
import Banner from "../components/Banner";
import BrandCards from "../components/BrandCardSection/BrandCards";
import Footer from "../components/Footer";
import RegistrationSection from "../components/RegistrationSection";


const Home = () => {
    return (
        <div>
            <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <BrandCards></BrandCards>
            <RegistrationSection></RegistrationSection>
            <Accordian></Accordian>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;