import React from "react";
import logo from "../assets/img/logo-white.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="heading-primary">
        <h1>
          <span>outdoors</span> <span>is where life happens</span>
        </h1>
        <a href="/" className="btn-white">
          view our tours
        </a>
      </div>
    </header>
  );
};

export default Header;
