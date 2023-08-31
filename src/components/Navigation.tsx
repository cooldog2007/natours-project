import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
  return (
    <div className="navigation">
      <input id="nav" type="checkbox" className="nav-checkbox" />
      <label htmlFor="nav">
        <div className="icon"></div>
      </label>
      <div className="nav-background"></div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li>
            <a href="#">1. live love laugh </a>
          </li>
          <li>
            <a href="#">2. easy pickins</a>
          </li>
          <li>
            <a href="#">3. morbidly obesed </a>
          </li>
          <li>
            <a href="#">4. tiktok haircut</a>
          </li>
          <li>
            <a href="#">5. organic brain damage</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
