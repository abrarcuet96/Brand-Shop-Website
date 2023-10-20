import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-900 text-base-content flex items-center justify-center">

                <div className="flex flex-col text-center items-center justify-center">
                    <div>
                        <h2 className="text-2xl font-bold text-white">Brand-Shop</h2>
                    </div>
                    <div>
                        <NavLink to="/" className="font-semibold text-lg text-white">Home</NavLink>
                        <div className="flex gap-5">
                            <NavLink className="font-semibold text-lg text-white" to="/login">Login</NavLink>
                            <NavLink className="font-semibold text-lg text-white" to="/register">Register</NavLink>
                            <NavLink className="font-semibold text-lg text-white" to="/myCart">Cart</NavLink>
                        </div>
                    </div>
                </div>


            </footer>
        </div>
    );
};

export default Footer;