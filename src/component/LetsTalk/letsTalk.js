import React from "react";
import "./letsTalk.scss";
import starImg from "../../assets/Images/logo.svg";

const LetsTalk = () => {
  return (
    <div className="talk-main-div container">
      <div className="talk-content d-flex j ustify-content-center align-items-center">
        <img src={starImg} />
        <h2>Want to see it in action? Let's Talk</h2>
        <p className="desc pt-3">
          The world’s best brands trust Vidbling. Whether it’s activating your
          next big launch, creating authentic content to fuel your performance
          marketing, or reacting to the latest brand-relevant trend, Pearpop for
          Enterprise Brands makes it possible.
        </p>
        <div className="btn-div mt-3 mb-4">
          <button className="gt-demo">Get a demo</button>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
