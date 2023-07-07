import React, { useEffect } from "react";
import "./Thrive.scss";
import { useNavigate } from "react-router-dom";
import Aos from "aos";

const Thrive = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <React.Fragment>
      <div className="thrive-main-div mt-5 pt-sm-5 mb-4">
        <div
          data-aos="fade-up"
          className="d-flex justify-content-center mt-5 part"
        >
          <h1 className="tsizeh1">
            Enjoy a reliable income stream, Monetize Your Passion and
          </h1>
        </div>
        <div data-aos="fade-up" className="d-flex justify-content-center part">
          <h1 className="thrive tsizeh1">Thrive</h1>
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

export default Thrive;
