import React, { useEffect } from "react";
import "./JoinNow.scss";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import mac from "../../assets/Images/mac_img.png";

const JoinNow = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <React.Fragment>
      <div className="joinNow-main-div">
        <div data-aos="fade-up" className="d-flex justify-content-center part ">
          <div className="px-sm-5 px-md-0 px-4">
            <h1 className="joinNowanimation sequence fadeInBottom">
              Sign up now and start{" "}
              <span className="joinNowanimation sequence fadeInBottom">
                your journey to
              </span>
            </h1>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="d-flex justify-content-center part joinNowanimation sequence fadeInBottom"
        >
          <h1 className="great">Greatness</h1>
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="700"
          className="d-flex justify-content-center py-3 joinNowanimation sequence fadeInBottom
        "
        >
          Vidbling: Empowering Creators, Inspiring Success!
        </p>
        <div data-aos="fade-up" className="d-flex justify-content-center">
          <img style={{ width: "100%" }} src={mac} />
        </div>
        <div data-aos="fade-up" className="mt-4">
          <div className="box position-relative"></div>
          <div
            className="gradient-border1 joinnow-div position-absolute"
            style={{ marginTop: "-71px", marginLeft: "6px" }}
          >
            <div onClick={() => navigate("/signup")}>Join Now</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JoinNow;
