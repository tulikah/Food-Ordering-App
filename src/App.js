import React, { lazy, Suspense } from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


const AppLayout = () => {
    return (
        <><HeaderComponent /><Outlet /></>
    )
}

const Grocery = lazy(() => import("./components/Grocery"))

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path:"/",
                element: <BodyComponent />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> 
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/restaurants/:resid",
                element: <RestaurantMenu />
            }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={ AppRouter } />);