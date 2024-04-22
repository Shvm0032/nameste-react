//Header Component//
import { CDN_APP_LOGO } from "../utils/links";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginLogoutBtn, setLoginLogoutBtn] = useState(" Login ");
  const OnlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="header flex justify-between shadow-lg p-2 py-1 h-36 sm:bg-slate-400 lg:bg-gray-300">
      <div className="logo-container">
        <img className="logo w-32  h-25 mix-blend-darken" src={CDN_APP_LOGO} />
      </div>
      <div className="nav-items flex items-center ">
        <ul className="flex p-4 m-4 text-lg ">
          <li className="px-2">Online Status : {OnlineStatus ? "✅" : "🔴"}</li>
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">🛒({cartItems.length})</Link>
          </li>
          <button
            className="Login-btn bg-green-400 border border-solid border-green-500 px-4 py-.1 rounded-sm"
            onClick={() => {
              loginLogoutBtn === " Login "
                ? setLoginLogoutBtn(" Logout ")
                : setLoginLogoutBtn(" Login ");
            }}
          >
            {loginLogoutBtn}
          </button>
          <li className="px-2">
            <span className="text-orange-600">{loggedInUser}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
