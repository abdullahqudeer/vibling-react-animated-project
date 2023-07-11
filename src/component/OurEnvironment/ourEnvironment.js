import React from "react";
import phoneFrame from "../../assets/Images/secondPhone.png";
import "./ourEnvironment.scss";

const OurEnvironment = () => {
  return (
    <div className="environment-main-div container my-5 py-5">
      <div className="first-div d-flex">
        <div className="left-part">
          <span>Customized Campaigns</span>
          <p>
            Tailor your influencer campaigns to align with your specific goals
            and resonate with your audience.
          </p>
        </div>
        <div className="right-part">
          <img src={phoneFrame} />
        </div>
      </div>

      <div className="second-div d-flex mt-5 pt-5">
        <div className="second-left-part">
          <img src={phoneFrame} />
        </div>

        <div className="second-right-part">
          <span>Seamless Integration</span>
          <p>
            Effortlessly integrate Vidbling with your existing marketing stack
            for streamlined workflows.
          </p>
        </div>
      </div>

      <div className="third-div d-flex mt-5 pt-5">
        <div className="third-left-part">
          <span>Targeted Audience Segmentation</span>
          <p>
            Identify and connect with niche audiences that align with your brand
            for enhanced campaign effectiveness.
          </p>
        </div>

        <div className="third-right-part">
          <img src={phoneFrame} />
        </div>
      </div>
    </div>
  );
};

export default OurEnvironment;
