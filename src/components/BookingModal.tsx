import React from "react";
import img1 from "../assets/img/nat-8.jpg";
import img2 from "../assets/img/nat-9.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useModalContext } from "../context/modalContext";
const BookingModal = () => {
  const { isModalOpen, setIsModalOpen } = useModalContext();

  return (
    <aside
      className={`booking-modal booking-modal--${
        isModalOpen ? "open" : "closed"
      }`}
    >
      <div
        className="bmodal-background"
        onClick={() => setIsModalOpen(false)}
      ></div>
      <div className="bmodal-container">
        <div className="img-container">
          <div
            className="img"
            style={{ backgroundImage: `url(${img1})` }}
          ></div>
          <div
            className="img"
            style={{ backgroundImage: `url(${img2})` }}
          ></div>
          <div className="img"></div>
        </div>
        <div className="bmodal-content">
          <h2 className="heading-secondary">step outta the car please sir</h2>
          <h3 className="heading-tetriary">
            i need you to step out of the car sir :)
          </h3>
          <div className="row">
            <div className="col-1-of-2">
              <p className="paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto rem dolores deleniti fugit laborum reprehenderit
                eligendi minima nulla sequi odio tenetur eius possimus optio
                libero nostrum soluta, pariatur saepe neque?
              </p>
            </div>

            <div className="col-1-of-2">
              <p className="paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Architecto rem dolores deleniti fugit laborum reprehenderit
                eligendi minima nulla sequi odio tenetur eius possimus optio
                libero nostrum soluta, pariatur saepe neque?
              </p>
            </div>
          </div>
          <button className="form-btn">
            <span>prosneed</span> <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <button onClick={() => setIsModalOpen(false)} className="btn-close">
          <FontAwesomeIcon icon={faX} />
        </button>
      </div>
    </aside>
  );
};

export default BookingModal;
