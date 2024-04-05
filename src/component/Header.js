//Header Component//
import {CDN_APP_LOGO} from "../utils/links";
import { useState } from "react";

const Header = () =>{
const[loginLogoutBtn,setLoginLogoutBtn] = useState("Login")

    return(
      <div className="header">
      <div className="logo-container">
        <img className="logo" 
        src={CDN_APP_LOGO}/>
      </div>
      <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button className="Login-btn" onClick={() =>{
         loginLogoutBtn==="Login" ? setLoginLogoutBtn("Logout")
        :setLoginLogoutBtn("Login")
        }}>
          {loginLogoutBtn}</button>

      </ul>
      </div>
      </div>
    )
  }
  export default Header;