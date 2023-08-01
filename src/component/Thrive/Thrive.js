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
          className="d-flex justify-content-center mt-4 Apart"
        >
          <h1 className="sizeh1">
            Enjoy a reliable income stream, Monetize Your Passion and <span className="thrive sizeh1">Thrive</span>
          </h1>
        </div>
        <div data-aos="fade-up" className="mt-5">
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
