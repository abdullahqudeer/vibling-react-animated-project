import React from "react";
import "./features.scss";

const FeatureCard = (props) => {
  return (
    <div className="mx-4 feature-card position-relative">
      <div className="feature-box position-relative" style={{ height: 350 }}>
        <div className="position-absolute text-center text-white  mt-2 d-flex flex-column justify-content-center align-items-center gap-3 py-5 px-4">
          <div className="icon-grad">
            <div className="icon-back">
              <img src={props.icon} alt="icon" />
            </div>
          </div>
          <h5>{props.heading}</h5>
          <p
            style={{
              fontSize: 14,
            }}
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
