import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import pic1Large from "../assets/img/nat-1-large.jpg";
import pic2Large from "../assets/img/nat-2-large.jpg";
import pic3Large from "../assets/img/nat-3-large.jpg";
import pic1 from "../assets/img/nat-1.jpg";
import pic2 from "../assets/img/nat-2.jpg";
import pic3 from "../assets/img/nat-3.jpg";
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
              {/* <img src={pic1Large} alt="sneed" className="pic1" /> */}
              <img
                srcSet={`${pic1} 300w, ${pic1Large} 1000w`}
                sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw , 300px"
                alt="sneed"
                className="pic1"
                src={pic1Large}
              />
              <img
                srcSet={`${pic2} 300w, ${pic2Large} 1000w`}
                sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw , 300px"
                src={pic2Large}
                alt="sneed"
                className="pic2"
              />
              <img
                srcSet={`${pic3} 300w, ${pic3Large} 1000w`}
                sizes="(max-width:56.25em) 20vw, (max-width:37.5em) 30vw , 300px"
                src={pic3Large}
                alt="sneed"
                className="pic3"
              />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default About;
