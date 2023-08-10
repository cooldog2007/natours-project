import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import pic1 from "../assets/img/nat-1-large.jpg";
import pic2 from "../assets/img/nat-2-large.jpg";
import pic3 from "../assets/img/nat-3-large.jpg";
const About = () => {
  return (
    <main className="section-about">
      <div className="u-center-text u-margin-bottom-big ">
        <h2 className="heading-secondary">
          exciting tours for adventurous people
        </h2>
      </div>
      <article>
        <div className="row">
          <div className="col-1-of-2 info">
            <div className="info-item">
              <h3 className="heading-tetriary">
                you're going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia quisquam consequuntur nesciunt, quis animi possimus nam
                nostrum inventore voluptatum ad modi optio dolores excepturi
                rerum velit minima, sunt voluptatibus doloremque?
              </p>
            </div>
            <div className="info-item">
              <h3 className="heading-tetriary">
                live adventures like you have never before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia quisquam consequuntur nesciunt
              </p>
            </div>
            <a href="#" className="btn-secondary">
              Learn more <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="col-1-of-2 ">
            <div className="pic-composition">
              <img src={pic1} alt="sneed" className="pic1" />
              <img src={pic2} alt="sneed" className="pic2" />
              <img src={pic3} alt="sneed" className="pic3" />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default About;
