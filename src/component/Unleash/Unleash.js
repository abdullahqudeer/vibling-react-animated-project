import React, { useEffect } from "react";
import "./Unleash.scss";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/videos/Vidbling.gif";
import Aos from "aos";

const Unleash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="home-div container row mt-5">
      <div className="leftpart-top col-md-8 col-lg-7 col-xl-6 my-4 my-sm-0">
        <div className="text-div tsize unleash">Unleash</div>
        <div className="text-div your tsize">Your</div>
        <div className="influence-div influence tsize">Influence</div>
        <div className="rightpart-logo col-md-4 col-lg-5 col-xl-6 d-flex justify-content-center align-items-center d-block d-md-none">
          <img src={logo} height="400px" className="img-fluid" />
        </div>
        <div className="d-flex justify-content-between">
          <div data-aos="fade-up" className="mt-4">
            <div className="box position-relative"></div>
            <div
              className="gradient-border1 joinnow-div position-absolute"
              style={{ marginTop: "-71px", marginLeft: "6px" }}
            >
              <div onClick={() => navigate("/signup")}>Join Now</div>
            </div>
          </div>
          <svg className="arrows mt-4">
							<path className="a1" d="M0 0 L15 16 L30 0"></path>
							<path className="a2" d="M0 20 L15 36 L30 20"></path>
							<path className="a3" d="M0 40 L15 56 L30 40"></path>
						</svg>
        </div>
      </div>
      <div className="rightpart-logo col-md-4 col-lg-5 col-xl-6 d-flex justify-content-center align-items-center d-none d-md-flex">
        <img src={logo} height="400px" className="img-fluid" />
      </div>
    </div>
  );
};

export default Unleash;
