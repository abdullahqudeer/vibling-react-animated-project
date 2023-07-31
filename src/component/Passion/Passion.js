import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "./Passion.scss";

const Passion = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="d-flex justify-content-center passion-main-div" style={{ marginBottom: 80 ,marginTop:150}}>
      <div className="text-main-div w-100">
        <div data-aos="fade-up" className="text-center-div">
          Join Vidbling and Revolutionize your{" "}
          <span className="passion-div">Passion!</span>
        </div>
        <div className="d-flex justify-content-center mt-4" data-aos="fade-up">
          <div className="box position-relative me-0"></div>
          <div
            className="gradient-border1 joinnow-div position-absolute"
            id="gradient-btn"
            style={{ marginTop: "4px", marginLeft: 0 }}
          >
            <div onClick={() => navigate("/signup")}>Join Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passion;
