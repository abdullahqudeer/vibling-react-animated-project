import React from "react";
import "./BrandSuccess.scss";
import LogoImg from "../../assets/Images/logo.svg";
import secondPhone from "../../assets/Images/secondPhone.png";
import iphoneImg1 from "../../assets/Images/iphoneImg1.png";
import iphoneImg2 from "../../assets/Images/iphoneImg2.png";
import PolygonImg1 from "../../assets/Images/Polygon6.png";
import PolygonImg2 from "../../assets/Images/Polygon5.png"
const BrandSuccess = () => {
  return (
    <div className="brand-success-main-div">
      <div className="brand-inner-div  py-5 ">
        <div className="container mb-5 pb-3">
          <div className="row">
            <div className="left-part col-lg-6 col-md-12 col-sm-12 px-2 my-5">
              <h3 className="content">
                Go Viral With <span>Vidbling</span>: Elevate Your Brand's{" "}
                <span>Success!</span>
              </h3>
            </div>
            <div className="right-part col-lg-6 col-md-12 col-sm-12 d-flex">
              <div className="images-div">
                <div>
                  <img src={LogoImg} alt="logo" />
                </div>
                <div className="polygon-img">
                  <img src={PolygonImg1} alt="polygon" />
                </div>
              </div>
              <div className="iphone-div d-flex">
                <div className="first-div">
                  <div className="phone-div">
                    <div className="align-self-center phone-pic1">
                      <img src={iphoneImg1} alt="iphoneImg" />
                    </div>
                  </div>
                  <div className="align-self-center phone-pic position-relative">
                    <img
                      src={secondPhone}
                      alt="img"
                      className="top-0 px-3 img"
                    />
                  </div>
                </div>
                <div className="second-div">
                  <div className="phone-div">
                    <div className="align-self-center phone-pic2 d-flex justify-content-center">
                      <img src={iphoneImg2} />
                    </div>
                  </div>
                  <div className="align-self-center phone-pic">
                    <img
                      src={secondPhone}
                      alt="img"
                      className="top-0 px-3 img"
                    />
                  </div>
                  <div className="poly-img">
                  <img src={PolygonImg2} alt="polygon"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSuccess;
