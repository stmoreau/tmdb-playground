import React from "react";
import Search from "../Search";
import "./Header.css";
import logo from "../assets/logo.svg";

const Header = () => (
  <div className="Header">
    <div className="Header__logo">
      <img className="Header__logo-img" src={logo} alt="Logo" />
    </div>
    <Search />
  </div>
);

export default Header;
