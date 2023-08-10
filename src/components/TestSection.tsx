import React from "react";

const TestSection = () => {
  return (
    <section className="grid-test">
      <div className="row">
        <div className="col-1-of-2">1 of 2</div>
        <div className="col-1-of-2">1 of 2</div>
      </div>
      <div className="row">
        <div className="col-1-of-3">1 of 3</div>
        <div className="col-1-of-3">1 of 3</div>
        <div className="col-1-of-3">1 of 3</div>
      </div>
      <div className="row">
        <div className="col-1-of-3">1 of 3</div>
        <div className="col-2-of-3">2 of 3</div>
      </div>
      <div className="row">
        <div className="col-1-of-4">1 of 4</div>
        <div className="col-1-of-4">1 of 4</div>
        <div className="col-2-of-4">2 of 4</div>
      </div>
    </section>
  );
};

export default TestSection;
