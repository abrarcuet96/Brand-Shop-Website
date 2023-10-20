import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li className="text-white"><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400 " : ""
            }
        >
            Home
        </NavLink></li>
        <li className="text-white"><NavLink
            to="/addProducts"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400" : ""
            }
        >
            Add Products
        </NavLink></li>
        <li className="text-white"><NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-400" : ""
            }
        >
            My Cart
        </NavLink></li>
    </>
    return (

        <div className="navbar rounded-lg max-w-screen-xl mx-auto my-5 bg-slate-900">
            <div className="navbar-start">
                <div className="dropdown gap-2">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52 gap-5">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex gap-2">
                    <div>
                        <img className="w-8" src="bookmark_6442280.png" alt="" />
                    </div>
                    <div>
                        <Link className="text-lg md:text-2xl font-bold text-white" to="/">Brand-Shop</Link>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-10">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <div className="flex flex-col md:flex-row">
                            <div className="bg-white mr-2 p-1 rounded-lg  w-full">
                                <span className="w-30 h-2 m-2 font-semibold">{user?.displayName}</span>

                            </div>
                            <img className="w-8 h-8 mr-2 rounded-full" src={user?.photoURL} alt="" />
                            <button onClick={handleSignOut} className="btn btn-sm bg-white">Sign Out</button>
                        </div>
                    </>
                    :
                    <Link className="btn btn-sm" to="/login">Login</Link>
                }
            </div>
        </div>

    );
};

export default NavBar;