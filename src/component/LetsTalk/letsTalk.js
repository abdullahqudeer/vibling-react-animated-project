import React, { useEffect } from "react";
import "./letsTalk.scss";
import starImg from "../../assets/Images/letstalk.png";
import polygonRight from "../../assets/Images/Polygon5.png";
import polygonLeft from "../../assets/Images/Polygon6.png";
import Aos from "aos";

const LetsTalk = () => {
  useEffect(() => {
    Aos.init({ duration: 3000});
  }, []);
  return (
    <div>
      <div className="py-5 my-5"></div>
      <div className="talk-main-div position-relative py-5">
        <div className="talk-content container d-flex justify-content-center align-items-center">
          <div
            className="d-flex justify-content-center"
            style={{ height: 300 }}
          >
            <img
              src={polygonLeft}
              height={299}
              width={299}
              className="polygon-left align-self-end"
            />
            <img src={starImg} width={403} height={440} className="logo" />
            <img
              src={polygonRight}
              height={299}
              width={299}
              className="polygon-right align-self-end"
            />
          </div>
          <h2>Want to see it in action? Let's Talk</h2>
          <p className="desc pt-3">
            The world’s best brands trust Vidbling. Whether it’s activating your
            next big launch, creating authentic content to fuel your performance
            marketing, or reacting to the latest brand-relevant trend, Pearpop
            for Enterprise Brands makes it possible.
          </p>
          <div className=" mt-3 mb-4">
            <div data-aos="fade-up" className="mt-4">
              <div className="box position-relative"></div>
              <div
                className="gradient-border1 joinnow-div position-absolute "
                style={{ marginTop: "-71px", marginLeft: "6px" }}
              >
                <div className="fon h4">Get a demo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;
