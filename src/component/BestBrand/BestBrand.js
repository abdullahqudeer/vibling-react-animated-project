import React from "react";
import "./BestBrand.scss";
import Deezer from "../../assets/Images/deezer.png";
import ClickedUp from "../../assets/Images/click-up.png";
import Hopper from "../../assets/Images/hopper.png";
import Unidas from "../../assets/Images/unidas .png";

const BestBrand = () => {
  return (
    <React.Fragment>
      <div className="best-brand-main-div container my-5 pt-5">
        <div className="title-div d-flex justify-content-center">
          <h2 className="title">The world's best brands trust Vidbling</h2>
        </div>
        <div className="d-flex justify-content-center  mt-4">
          <div className="top-btn-div d-flex justify-content-center align-items-center">
            <button className="top-btn">Get a demo</button>
          </div>
        </div>
        <div className="row images-div mt-5 pt-2">
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex align-items-center justify-content-center">
            <img src={Deezer} alt="deezer" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
            <img src={ClickedUp} alt="deezer" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center align-items-center">
            <img src={Hopper} alt="deezer" />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
            <img src={Unidas} alt="deezer" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BestBrand;
