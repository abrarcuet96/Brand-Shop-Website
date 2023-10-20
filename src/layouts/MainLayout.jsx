import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const MainLayout = () => {
    return (
        <div className="px-2">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;