import React from "react";
import "./Header.css";
import { BiSearchAlt } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useStateValue } from "../../state-provider/StateProvider";

function Header() {
  const [{basket}] =useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header_logo"
          alt="logo"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* search area Logo */}
        <BiSearchAlt className="header-searchIcon" />
      </div>
      <div className="header_nav_right">
        {/* the right side of the navbar */}
        <Link to="/login">
        <div className="header_option">
          <span className="header_option_one"> Hello Guest </span>
          <span className="header_option_two"> Sign In </span>
        </div>
        </Link>
        <div className="header_option">
          <span className="header_option_one"> Return </span>
          <span className="header_option_two"> & Orders </span>
        </div>
        <div className="header_option">
          <span className="header_option_one"> Your </span>
          <span className="header_option_two"> Prime </span>
        </div>

        <Link to="/checkout">
        <div className="header_option_basket">
          <MdAddShoppingCart className="header_shopping_cart" />
          <span className="header_option_two header_basket_count">{basket.length}</span>
        </div>
        </Link>
        
      </div>
    </div>
  );
}

export default Header;
