import { createContext } from "react";
import Accordian from "../components/Accordian";
import Banner from "../components/Banner";
import BrandCards from "../components/BrandCardSection/BrandCards";
import Footer from "../components/Footer";
import "./Home.css"
import SendEmail from "../components/SendEmail/SendEmail";
import NavBar from "../components/NavBar";
import AboutUs from "../components/AboutUs/AboutUs";
import Commitments from "../components/Commitments/Commitments";
export const ThemeContext = createContext(null);
// import ReactSwitch from "react-switch";
const Home = () => {
    // const [theme, setTheme] = useState("dark");
    // const toggleTheme = () => {
    //     setTheme((curr) => (curr === "light" ? "dark" : "light"));
    // };
    return (
        // <ThemeContext.Provider value={{ theme, toggleTheme }}>
        //     <div id={theme}>
        //         <div className="max-w-screen-xl mx-auto">
        //             <div className="switch text-center p-5 flex flex-row gap-5 justify-center items-center">
        //                 <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        //                 <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}>
        //                 </ReactSwitch></div>
        //             <Banner></Banner>
        //             <BrandCards></BrandCards>
        //             <RegistrationSection></RegistrationSection>
        //             <Accordian></Accordian>
        //         </div>
        //         <Footer></Footer>
        //     </div>
        // </ThemeContext.Provider>
        <div className=" bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600">
            <div className="">
                <NavBar></NavBar>
                <Banner></Banner>
                <AboutUs></AboutUs>
                <BrandCards></BrandCards>
                <SendEmail></SendEmail>
                <Accordian></Accordian>
                <Commitments></Commitments>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;