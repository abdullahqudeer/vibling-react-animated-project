import React from "react";
import "./Explode.scss";
import Rocket from "../../assets/Images/rocket.png";
import Fire from "../../assets/Images/fire.png";
import secondPhone from "../../assets/Images/secondPhone.png";
import image1 from "../../assets/Images/image1.png";
import image2 from "../../assets/Images/image2.png";
import image3 from "../../assets/Images/image3.png";

const Explode = () => {
  return (
    <React.Fragment>
      <div className="explode-main-div container">
        <div className="title-div d-flex justify-content-center">
          <h2 className="title">Explode Your Growth</h2>
        </div>
        <div className="desc-div mt-3">
          <h6 className="description">
            Maximize the dynamic force of Vidbling's subscription model.
            Subscribe to multiple creators and influencers, and watch your
            brand's visibility explode across the digital universe. Reach
            millions, inspire engagement, and become an unforgettable presence.
          </h6>
        </div>
        <div className="d-flex justify-content-center  mt-5">
          <div className="top-btn-div d-flex justify-content-center align-items-center">
            <button className="top-btn">Learn More</button>
          </div>
        </div>
        <div className="images-div d-flex justify-content-start my-5">
          <div className="rocket-img d-flex justify-content-start align-items-start">
            <img src={Rocket} alt="Rocket" />
          </div>

          <div className="iphone-div d-flex justify-content-center">
            <div className="first-div">
              <div className="phone-div">
                <div className="align-self-center phone-pic1">
                  <img src={image1} alt="iphoneImg" />
                </div>
              </div>
              <div className="align-self-center phone-pic position-relative">
                <img src={secondPhone} alt="img" className="top-0 px-3 img" />
              </div>
            </div>
            <div className="second-div">
              <div className="phone-div">
                <div className="align-self-center phone-pic2 d-flex justify-content-center">
                  <img src={image2} />
                </div>
              </div>
              <div className="align-self-center phone-picc position-relative">
                <img src={secondPhone} alt="img" className="top-0 px-3 img" />
              </div>
            </div>
            <div className="third-div">
              <div className="phone-div">
                <div className="align-self-center phone-pic1 d-flex justify-content-center">
                  <img src={image3} />
                </div>
              </div>
              <div className="align-self-center phone-pic position-absolute">
                <img src={secondPhone} alt="img" className="top-0 px-3 img" />
              </div>
            </div>
          </div>

          <div className="fire-img d-flex align-items-end justify-content-end">
            <img src={Fire} alt="Fire" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Explode;
