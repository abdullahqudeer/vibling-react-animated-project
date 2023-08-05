import React, { useEffect } from "react";
import "./Brilliance.scss";
import Aos from "aos";
import Analytics from "../../assets/Images/Analytics.png";
import Target from "../../assets/Images/Target.png";
import rightPhone from "../../assets/Images/ai-Right Phone.png";
import midlePhone from "../../assets/Images/ai-image 22.png";
import leftPhone from "../../assets/Images/Left Phone.png";

const Brilliance = () => {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  return (
    <React.Fragment>
      <div className="brilliance-main-div py-0 py-md-5">
        <div className="container">
          <div className="py-0 py-md-5"></div>
          <div className="title-div d-flex justify-content-center">
            <h2 className="title">AI-Powered Platform</h2>
          </div>
          <div className="desc-div mt-4">
            <h6 className="description">
              Vidbling's AI-powered matching algorithm will match your Brand
              with the right Creator for the perfect creative partnerships.
            </h6>
            <h6 className="title mt-4">Streamlined Collaboration</h6>
            <h6 className="description">
              Simplify the process with seamless communication, and campaign
              tracking.
            </h6>
          </div>
          <div className="images-div my-0 my-md-5">
            <div className="py-0 py-md-4"></div>
            <div className="iphone-div">
              <div className="analytics-img">
                <img src={Analytics} alt="Rocket" />
              </div>
              <div className="mobil-div d-flex justify-content-center">
                <img
                  src={leftPhone}
                  className="left-mobile mb-4"
                  alt="..."
                />
                <img
                  src={midlePhone}
                  className="mobile"
                  alt="..."
                />
                <img
                  src={rightPhone}
                  className="right-mobile mb-4"
                  alt="..."
                />
              </div>
              <div className="target-img d-flex align-items-end justify-content-end">
                <img src={Target} alt="Fire" width={339} />
              </div>
            </div>
            <div className="d-flex justify-content-center">

            <div className="d-flex justify-content-center py-5 my-5">
              <div data-aos="fade-up" className="mt-4 mx-auto">
                <div className="box position-relative"></div>
                <div
                  className=" gradient-border1 joinnow-div position-absolute"
                  style={{ marginTop: "-71px", marginLeft: "6px" }}
                >
                  <div className="fon h4"> Learn More</div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="py-0 py-md-5 my-0 my-md-5"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Brilliance;
