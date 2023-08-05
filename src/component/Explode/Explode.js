import React, { useEffect } from "react";
import "./Explode.scss";
import Rocket from "../../assets/Images/rocket.png";
import Fire from "../../assets/Images/fire.png";
import rightPhone from "../../assets/Images/Group 35.png";
import midlePhone from "../../assets/Images/Middle Phone.png";
import phoneFrame from "../../assets/Images/secondPhone.png";
import leftPhone from "../../assets/Images/Group 34.png";
import Aos from "aos";
import ReactPlayer from 'react-player/lazy';

import vid1 from  "../../assets/videos/video9.mp4"


import ArtWork from "../../assets/Images/Artwork.png";

const Explode = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <React.Fragment>
      <div className="explode-main-div ">
        <div className="container">
          <div className="py-4"></div>

          <div className="title-div d-flex justify-content-center">
            <h2 className="title">Explode Your Growth</h2>
          </div>
          <div className="desc-div mt-3">
            <h6 className="description">
              Maximize the dynamic force of Vidbling's subscription model.
              Subscribe to multiple creators and influencers, and watch your
              brand's visibility explode across the digital universe. Reach
              millions, inspire engagement, and become an unforgettable
              presence.
            </h6>
          </div>
          <div className="d-flex justify-content-center  pt-5">
            <div data-aos="fade-up" className="mt-4">
              <div className="box position-relative"></div>
              <div
                className="gradient-border1 joinnow-div position-absolute "
                style={{ marginTop: "-71px", marginLeft: "6px" }}
              >
                <div className="fon h4">Learn More</div>
              </div>
            </div>
          </div>
          <div className="py-5"></div>
        </div>
        <div className="images-div mt-0 mt-md-5 ">
          <div className="container pb-0 pb-md-5">
            <div className="iphone-div">
              <div className="rocket-img">
                <img src={Rocket} alt="Rocket" />
              </div>
              <div className="mobil-div d-flex justify-content-center align-items-end flex-column-reverse flex-md-row">
                <img src={leftPhone} className="left-mobile mb-4 mt-sm-0 mt-5" alt="..." />

                <div className="phone-wrapper mb-sm-4 mb-5">
                <img style={{position:"relative"}} src={phoneFrame} alt="iphoneImg" />
                <ReactPlayer style={{position:"absolute",top:0,left:5,zIndex:-1,overflow:"hidden" }} muted loop={true} width={"95%"}  height={"100%"} playing={true} url={vid1} />
                </div>
                
                <img src={rightPhone} className="right-mobile mb-4" alt="..."/>
              </div>
              <div className="fire-img d-flex align-items-end justify-content-end">
                <img src={Fire} alt="Fire"/>
              </div>
              <div className="py-0 py-md-5"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Explode;
