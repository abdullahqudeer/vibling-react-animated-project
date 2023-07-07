import React, { useEffect } from "react";
import "./Charlie.scss";
import logo from "../../assets/videos/Vidbling.gif";
import Aos from "aos";
const Charlie = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <React.Fragment>
      <div className="charlie-main-div container mt-sm-5 pt-sm-5">
        <div className="row">
          <div className="left-part mt-5 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
            <img className="img-1 img-fluid" src={logo} alt="logo" />
          </div>
          <div className="right-part mt-5 col-lg-6 col-md-12 col-sm-12">
            <div className="content-item">
              <div data-aos="fade-up">
                <p className="main-title">
                  Earn a Steady income doing what you{" "}
                  <span className="love-grad">Love</span>
                </p>
              </div>
              <div data-aos="fade-up">
                <p className="desc mb-0 mt-3">
                  " Before Vidbling ,creating content was my part-time job...
                </p>
              </div>
              <div data-aos="fade-up">
                <p className="desc mb-3">Now its the other way around!"</p>
              </div>
              <h6 data-aos="fade-up" data-aos-delay="300" className="pt-1">
                @Charlie Adams | 1.8M
              </h6>
              <div data-aos="fade-up" className="mt-5">
                <div className="box position-relative"></div>
                <div
                  className="gradient-border1 joinnow-div position-absolute"
                  style={{ marginTop: "-71px", marginLeft: "6px" }}
                >
                  <div>Do It Like Charlie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Charlie;
