import React from "react";
import logo2x from "../assets/img/logo-green-2x.png";
import logo1x from "../assets/img/logo-green-1x.png";
import logoSmall2x from "../assets/img/logo-green-small-2x.png";
import logoSmall1x from "../assets/img/logo-green-small-1x.png";
const Footer = () => {
  return (
    <footer className="footer">
      <picture>
        <source
          srcSet={`${logoSmall1x} 1x, ${logoSmall2x} 2x`}
          media="(max-width: 37.5em)"
        />
        <img srcSet={`${logo1x} 1x, ${logo2x} 2x`} alt="smeed" src={logo2x} />
      </picture>
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
              Conceptualized and designed by my vryvn brxther{" "}
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
