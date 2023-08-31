import React from "react";
import logo from "../assets/img/logo-green-2x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="smeed" />
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__links-container">
            <a href="#" className="footer__link">
              company
            </a>
            <a href="#" className="footer__link">
              contact us
            </a>
            <a href="#" className="footer__link">
              careers
            </a>
            <a href="#" className="footer__link">
              privacy policy
            </a>
            <a href="#" className="footer__link">
              terms
            </a>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="footer__copyright">
            <p>
              Conceptualized and designed by my aryan brxther{" "}
              <span>Jonas Schmedtmann</span>, built by{" "}
              <a href="https://github.com/cooldog2007">me </a>
              thoughever.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
