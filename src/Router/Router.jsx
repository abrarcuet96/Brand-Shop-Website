import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddProduct from "../components/AddProduct";
import MyCart from "../components/MyCart";

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
    ]
}])
export default myCreatedRoute;