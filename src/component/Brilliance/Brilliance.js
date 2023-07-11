import React from "react";
import "./Brilliance.scss";
import Analytics from "../../assets/Images/Analytics.png";
import ArtWork from "../../assets/Images/Artwork.png";
import Target from "../../assets/Images/Target.png";

const Brilliance = () => {
  return (
    <React.Fragment>
      <div className="brilliance-main-div container my-5 py-5">
        <div className="title-div d-flex justify-content-center">
          <h2 className="title">Targeted Brilliance</h2>
        </div>
        <div className="desc-div mt-3">
          <h6 className="description">
            Find your brand's perfect match among Vidbling's galaxy of creators.
            Collaborate with authentic voices that genuinely resonate with your
            audience, forging deep connections and stirring emotions. Experience
            the powerful alchemy of influencer collaboration that unlocks
            untapped potential.
          </h6>
        </div>
        <div className="d-flex justify-content-center  mt-5">
          <div className="top-btn-div d-flex justify-content-center align-items-center">
            <button className="top-btn">Learn More</button>
          </div>
        </div>
        <div className="images-div my-5 py-5">
          <div className="iphone-div">
            <div className="analytics-img">
              <img src={Analytics} alt="Analytics" />
            </div>
            <img src={ArtWork} className="work" />
            <div className="target-img d-flex align-items-start justify-content-end">
              <img src={Target} alt="Target" />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Brilliance;
