import React from "react";
import "./Explode.scss";
import Rocket from "../../assets/Images/rocket.png";
import Fire from "../../assets/Images/fire.png";
import secondPhone from "../../assets/Images/secondPhone.png";

import ArtWork from "../../assets/Images/Artwork.png"

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
        <div className="images-div my-5">
          <div className="rocket-img">
            <img src={Rocket} alt="Rocket" />
          </div>

          <div className="iphone-div d-flex justify-content-center">
            <img src={ArtWork}/>
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
