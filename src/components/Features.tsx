import React from "react";
import FeatureBox from "./FeatureBox";

const phtext =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatibus aliquam incidunt consequuntur ";

const Features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <FeatureBox
            icon="icon-basic-world"
            title="explore the world"
            text={phtext}
          />
        </div>
        <div className="col-1-of-4">
          <FeatureBox
            icon="icon-basic-compass"
            title="meet nature"
            text={phtext}
          />
        </div>
        <div className="col-1-of-4">
          <FeatureBox icon="icon-basic-map" title="get real" text={phtext} />
        </div>
        <div className="col-1-of-4">
          <FeatureBox
            icon="icon-basic-heart"
            title="live a healthier life"
            text={phtext}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
