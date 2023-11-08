import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/OIP.jpeg";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { ThemeContext } from "../utils/ThemeContext";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
    const { loggedInUser } = useContext(UserContext);
    const [btnReact, setBtnReact] = useState(loggedInUser);
    const { theme, setTheme } = useContext(ThemeContext);

    const darkThemeBg = theme === 'dark' ? 'bg-slate-600 text-slate-50' : 'bg-gray-200 text-black';

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className={`flex h-24 ${darkThemeBg}`}>
            <div className="w-20 m-2">
                <img src={logo}></img>
            </div>
            <div className={`w-full items-center ${darkThemeBg}`}>
                <ul className="flex m-5 py-4 justify-end">
                    <li className="pr-10">
                        <label>
                            Dark Mode
                            <input className="ml-1" type="checkbox" checked={theme === 'dark'} onChange={(e) => e.target.checked ? setTheme('dark') : setTheme('light')}>
                            </input>
                        </label>
                    </li>
                    <li className="pr-10">Online Status: {useOnlineStatus() ? '🟢' : '🔴'}</li>
                    <li className="pr-10"><Link to="/">Home</Link></li>
                    <li className="pr-10"><Link to="/about">About Us</Link></li>
                    <li className="pr-10"><Link to="/grocery">Grocery</Link></li>
                    <li className="pr-10"><Link to="/contact">Contact Us</Link></li>
                    <li className="pr-10"><Link to="/cart">Cart-{cartItems.length}</Link></li>
                    <button className="Login" onClick={() => {
                        btnReact === { loggedInUser } ? setBtnReact("Logout") : setBtnReact({ loggedInUser })
                    }}>
                        {loggedInUser}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;