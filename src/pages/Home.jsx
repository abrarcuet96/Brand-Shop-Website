import { createContext, useState } from "react";
import Accordian from "../components/Accordian";
import Banner from "../components/Banner";
import BrandCards from "../components/BrandCardSection/BrandCards";
import Footer from "../components/Footer";
import RegistrationSection from "../components/RegistrationSection";
import "./Home.css"
export const ThemeContext = createContext(null);
import ReactSwitch from "react-switch";
const Home = () => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div id={theme}>
                <div className="max-w-screen-xl mx-auto">
                    <div className="switch text-center p-5 flex flex-row gap-5 justify-center items-center">
                        <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}>
                        </ReactSwitch></div>
                    <Banner></Banner>
                    <BrandCards></BrandCards>
                    <RegistrationSection></RegistrationSection>
                    <Accordian></Accordian>
                </div>
                <Footer></Footer>
            </div>
        </ThemeContext.Provider>
    );
};

export default Home;