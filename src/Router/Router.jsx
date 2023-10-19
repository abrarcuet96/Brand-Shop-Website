import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BrandProducts from "../pages/BrandProducts";

const myCreatedRoute = createBrowserRouter([{
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addProducts',
            element: <AddProduct></AddProduct>
        },
        {
            path: '/myCart',
            element: <MyCart></MyCart>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/products/:id',
            element: <BrandProducts></BrandProducts>
        },
    ]
}])
export default myCreatedRoute;