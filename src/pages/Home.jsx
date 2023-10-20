import Accordian from "../components/Accordian";
import Banner from "../components/Banner";
import BrandCards from "../components/BrandCardSection/BrandCards";
import RegistrationSection from "../components/RegistrationSection";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Banner></Banner>
            <BrandCards></BrandCards>
            <RegistrationSection></RegistrationSection>
            <Accordian></Accordian>
        </div>
    );
};

export default Home;