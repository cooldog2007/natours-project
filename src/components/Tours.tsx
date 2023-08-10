import React from "react";
import Card from "./Card";
import nat4 from "../assets/img/nat-4.jpg";
import nat5 from "../assets/img/nat-5.jpg";
import nat6 from "../assets/img/nat-6.jpg";
import nat7 from "../assets/img/nat-7.jpg";

const testItems = [
  "sample text",
  "sample text zzz",
  "sample text",
  "sample text sample text",
  "sample text chuckin sneed",
];
const Tours = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text">
        <h2 className="heading-secondary u-margin-bottom-big">
          most popular tours
        </h2>
        <div className="section-tours__card-container">
          <div className="row">
            <div className="col-1-of-3">
              <Card
                imageUrl={nat5}
                title="the sea explorer"
                bgcolorPrimary="255, 220, 122"
                bgcolorSecondary="225, 200, 110"
                listItems={testItems}
                price={300}
              />
            </div>
            <div className="col-1-of-3">
              <Card
                imageUrl={nat6}
                title="the tundra strider"
                bgcolorPrimary="85, 197, 122"
                bgcolorSecondary="78, 180, 115"
                listItems={testItems}
                price={400}
              />
            </div>
            <div className="col-1-of-3">
              <Card
                imageUrl={nat7}
                title="the mountain warlord "
                bgcolorPrimary="90, 90, 255"
                bgcolorSecondary=" 80, 80, 230"
                listItems={testItems}
                price={450}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;
