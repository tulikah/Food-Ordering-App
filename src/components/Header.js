import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/OIP.jpeg";
import useOnlineStatus from "../hooks/useOnlineStatus";



const HeaderComponent = () => {
    const [btnReact, setBtnReact] = useState("Login");

    return (
        <div className="flex h-24 mb-2 shadow-lg">
            <div className="w-20 m-2">
                <img src={logo}></img>
            </div>
            <div className="w-full items-center bg-gray-200">
                <ul className="flex m-5 py-4 justify-end">
                    <li className="pr-10">Online Status: {useOnlineStatus() ? '🟢': '🔴'}</li>
                    <li className="pr-10"><Link to="/">Home</Link></li>
                    <li className="pr-10"><Link to="/about">About Us</Link></li>
                    <li className="pr-10"><Link to="/grocery">Grocery</Link></li>
                    <li className="pr-10"><Link to="/contact">Contact Us</Link></li>
                    <li className="pr-10">Cart</li>
                    <button className="Login" onClick={() => {
                        btnReact === "Login" ? setBtnReact("Logout") : setBtnReact("Login")
                    }}>
                        {btnReact}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;