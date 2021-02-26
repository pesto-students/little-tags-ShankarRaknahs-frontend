import React from "react";
import logo from "../../assets/logo.png";
import LanguageIcon from "@material-ui/icons/Language";
import { PersonOutlineOutlined } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";
import COLORS from '../../config/colors.config';
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-nav-items">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="Search for products, brands ..."
          />
          <div className="search-icon">
            <SearchIcon style={{ fontSize: "2.5em" }}></SearchIcon>
          </div>
        </div>
      </div>
      <div className="right-nav-items">
        <div className="globe-icon">
          <LanguageIcon
            style={{ color: `${COLORS.SILVERSAND}`, fontSize: "2.5em" }}
          ></LanguageIcon>
          <div className="language-select">
            <Select value={"En"} style={{ color: `${COLORS.SILVERSAND}`, fontWeight: "bold" }}>
              <MenuItem value={"En"}>En</MenuItem>
              <MenuItem value={"Es"}>Es</MenuItem>
            </Select>
          </div>
        </div>
        <div className="user-icon">
          <PersonOutlineOutlined
            style={{ color: `${COLORS.SILVERSAND}`, fontSize: "2.5em" }}
          ></PersonOutlineOutlined>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
