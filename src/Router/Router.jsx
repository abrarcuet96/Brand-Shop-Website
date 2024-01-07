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
import ErrorPage from "../pages/ErrorPage";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
            },
            {
                path: '/products/:id',
                element: <BrandProducts></BrandProducts>
            },
            {
                path: '/updateProducts/:id',
                element: <PrivateRoutes><UpdateProductDetails></UpdateProductDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://my-brand-shop-server-mvzb6r7dq-abrars-projects-bbcef6d7.vercel.app/products/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader: () => fetch('https://my-brand-shop-server-mvzb6r7dq-abrars-projects-bbcef6d7.vercel.app/cartProducts')
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
])
export default myCreatedRoute;