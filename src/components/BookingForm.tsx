import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type RadioOptions = "small" | "large";

const BookingForm = () => {
  const [checkedRadio, setCheckedRadio] = useState<RadioOptions>("small");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div className="booking-container">
      <div className="form-container">
        <form className="booking-form">
          <h2 className="heading-secondary u-margin-bottom-medium">
            start booking now!
          </h2>
          <div className="u-margin-bottom-medium">
            <input
              id="name"
              type="text"
              placeholder="Full name"
              className="text-input"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              required
            />
            <label className="text-input__label" htmlFor="name">
              Full name
            </label>
          </div>
          <div className="u-margin-bottom-medium">
            <input
              id="email"
              type="email"
              placeholder="Email adress "
              className="text-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label className="text-input__label" htmlFor="email">
              Email adress
            </label>
          </div>
          <fieldset className="u-margin-bottom-medium">
            <div className="group-option">
              <div
                className="radio-container"
                onClick={() => setCheckedRadio("small")}
              >
                <input
                  type="radio"
                  id="smallGroup"
                  name="groupSize"
                  value="small"
                  className="radio-input"
                  checked={checkedRadio === "small"}
                  onChange={() => setCheckedRadio("small")}
                />
              </div>
              <label htmlFor="smallGroup">Small tour group</label>
            </div>
            <div className="group-option">
              <div
                className="radio-container"
                onClick={() => setCheckedRadio("large")}
              >
                <input
                  type="radio"
                  id="largeGroup"
                  name="groupSize"
                  value="large"
                  className="radio-input"
                  checked={checkedRadio === "large"}
                  onChange={() => setCheckedRadio("large")}
                />
              </div>
              <label htmlFor="largeGroup">Large tour group</label>
            </div>
          </fieldset>
          <button className="form-btn">
            <span>yaho sensei</span> <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
