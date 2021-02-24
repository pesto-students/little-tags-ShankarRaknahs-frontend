import React from "react";
import searchIcon from '../../assets/search-icon.png'
import globeIcon from '../../assets/globe_svg\ 1.png'
import userIcon from '../../assets/user_svg\ 1.png'
import logo from '../../assets/logo.png';
import "./navbar.css";


function Navbar() {
  return (
    <div className="navbar-container">
        <div className = "left-nav-items">
      <div className="logo">
        <img src = {logo} alt = 'logo'></img>
      </div>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search for products, brands ..."
        />
        <div className = "search-icon"><img src = {searchIcon} alt = 'search-icon'></img></div>
      </div>
      </div>
      <div className = "right-nav-items">
        <div className = "globe-icon"><img src = {globeIcon} alt = 'globe-icon'></img><span className = "language"> En </span></div>
        <div className = "user-icon"><img src = {userIcon} alt = 'user-icon'></img></div>
      </div>
    </div>
  );
}

export default Navbar;
