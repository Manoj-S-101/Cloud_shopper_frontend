import React, { useState ,useEffect, useContext, useRef } from "react";
import logo_icon from "../../Assets/logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import dropdown_icon from '../../Assets/dropdown_icon.png'
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { shopContext } from '../../context/shopContext';

const Navbar = () => {

  const menuRef=useRef();

  const {getTotalCartCount} = useContext(shopContext);
  const location = useLocation();

  const getMenuFromPath = (pathname) => {
    if (pathname === "/") return "shop";
    if (pathname === "/men") return "men";
    if (pathname === "/women") return "women";
    if (pathname === "/kid") return "kid";
  };

  const [menu, setMenu] = useState(getMenuFromPath(location.pathname));

  useEffect(() => {
    setMenu(getMenuFromPath(location.pathname));
  }, [location.pathname]);

  const dropdownToggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo_icon} alt="" />
        <Link to="/"><p>SHOPPER</p> </Link> 
      </div>
      <div className="menus">
        {/* <img className='nav-dropdown' src={dropdown_icon} onClick={dropdownToggle} alt="" /> */}
        <div className="nav-dropdown" onClick={dropdownToggle}>V</div>
        <ul ref={menuRef} className="nav-menu">
          <li onClick={()=>{setMenu("shop")}}><Link to="/"> Shop </Link> {menu === "shop" && <hr />}</li>
          <li onClick={()=>{setMenu("men")}}><Link to="/men"> Men </Link>{menu === "men" && <hr />}</li>
          <li onClick={()=>{setMenu("women")}}><Link to="/women"> Women </Link>{menu === "women" && <hr />}</li>
          <li onClick={()=>{setMenu("kid")}}><Link to="/kid"> Kids </Link>{menu === "kid" && <hr />}</li>
        </ul>
      </div>
      <div className="cart-login">
        {localStorage.getItem('auth-token')?<button className="Login-signup" onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/")}}>Logout</button>:<Link to="/login-signup" ><button className="Login-signup">Login</button></Link>}
        <div className="cart">
          <Link to="/cart"> <img src={cart_icon} alt="" /></Link>
          <p>{getTotalCartCount()}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
