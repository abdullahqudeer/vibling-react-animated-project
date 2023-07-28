import React from "react";
import "./letsTalk.scss";
import starImg from "../../assets/Images/letstalk.png";
import polygonRight from "../../assets/Images/Polygon5.png";
import polygonLeft from "../../assets/Images/Polygon6.png";

const LetsTalk = () => {
  return (
    <div className="talk-main-div position-relative">
      <div className="talk-content container d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center" style={{height:300}}>
        <img src={polygonLeft} height={299} width={299} className="polygon-left align-self-end" />
        <img src={starImg} width={403} height={440} className="logo" />
        <img src={polygonRight} height={299} width={299} className="polygon-right align-self-end" />
        </div>
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
