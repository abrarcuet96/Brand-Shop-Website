import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddProduct from "../pages/AddProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import BrandProducts from "../pages/BrandProducts";
import ProductDetails from "../pages/ProductDetails";
import PrivateRoutes from "./PrivateRoutes";
import UpdateProductDetails from "../pages/UpdateProductDetails";

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
            element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
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
        {
            path: '/updateProducts/:id',
            element: <UpdateProductDetails></UpdateProductDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
            path: '/details/:id',
            element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
            loader: ()=> fetch('http://localhost:5000/cartProducts')
        },
    ]
}])
export default myCreatedRoute;