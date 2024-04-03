//Header Component//
import {CDN_APP_LOGO} from "../utils/links";
const Header = () =>{
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
      </ul>
      </div>
      </div>
    )
  }
  export default Header;