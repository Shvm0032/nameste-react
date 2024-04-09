//Header Component//
import { CDN_APP_LOGO } from "../utils/links";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");
const OnlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_APP_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status : {OnlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/about">About Us</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
          <li>
          <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="Login-btn"
            onClick={() => {
              loginLogoutBtn === "Login"
                ? setLoginLogoutBtn("Logout")
                : setLoginLogoutBtn("Login");
            }}
          >
            {loginLogoutBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
