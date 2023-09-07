import React from "react";

export type FeatureBoxProps = {
  icon: string;
  title: string;
  text: string;
};

const FeatureBox = (props: FeatureBoxProps) => {
  const { icon, title, text } = props;
  return (
    <div className="feature-box">
      <i className={`${icon} feature-box__icon`}></i>
      <div className="feature-box__text-container">
        <h3 className="heading-tetriary">{title}</h3>
        <p className="paragraph feature-box__text">{text}</p>
      </div>
    </div>
  );
};

export default FeatureBox;
