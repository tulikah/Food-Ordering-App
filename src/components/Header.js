import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/OIP.jpeg";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
import { ThemeContext } from "../utils/ThemeContext";

const HeaderComponent = () => {
    const { loggedInUser } = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext);
    const [btnReact, setBtnReact] = useState('Login');
    const [labelReact, setlabelReact] = useState('Dark Mode');


    const darkThemeBg = theme === 'dark' ? 'bg-slate-600 text-slate-50' : 'bg-gray-200 text-black';

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div data-testid="header" className={`flex h-24 ${darkThemeBg}`}>
            <div className="w-20 m-2">
                <img src={logo}></img>
            </div>
            <div className={`w-full items-center ${darkThemeBg}`}>
                <ul aria-labelledby="ule" className="flex m-5 py-4 justify-end">
                    <li data-testid="ulelements" className="pr-10">
                        <label>
                            {labelReact}
                            <input className="ml-1" type="checkbox" checked={theme === 'dark'} onChange={(e) => e.target.checked ? setTheme('dark') & setlabelReact('Light Mode') : setTheme('light') & setlabelReact('Dark Mode')}>
                            </input>
                        </label>
                    </li>
                    <li className="pr-10" data-testid="onlineStatus">Online Status: {useOnlineStatus() ? '🟢' : '🔴'}</li>
                    <li className="pr-10"><Link to="/">Home</Link></li>
                    <li className="pr-10"><Link to="/about">About Us</Link></li>
                    <li className="pr-10"><Link to="/grocery">Grocery</Link></li>
                    <li className="pr-10"><Link to="/contact">Contact Us</Link></li>
                    <li className="pr-10"><Link to="/cart">Cart-{cartItems.length}</Link></li>
                    <li className="pr-10"><button onClick={() => {
                        btnReact === 'Login' ? setBtnReact("Logout") : setBtnReact("Login")
                    }}>
                        {btnReact}
                    </button></li>
                    <li className="pr-10" data-testid="loggeduser"> {loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;