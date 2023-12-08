import React, { lazy, Suspense, useState, useEffect, createContext } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { UserContext } from "./utils/UserContext";
import { ThemeContext } from "./utils/ThemeContext";
import { Provider } from 'react-redux';
import { appStore } from "./redux/appStore";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";



const AppLayout = () => {

    const [userName, setUserName] = useState();
    const [theme, setTheme] = useState('');

    useEffect(() => {
        const data = {
            name: 'USER NAME'
        }
        setUserName(data.name);
    }, [])

    return (
        <>
        <Provider store={appStore}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                    <HeaderComponent />
                    <Outlet />
                </UserContext.Provider>
            </ThemeContext.Provider>
            </Provider>
        </>
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
                path: "/",
                element: <BodyComponent />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resid",
                element: <RestaurantMenu />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);