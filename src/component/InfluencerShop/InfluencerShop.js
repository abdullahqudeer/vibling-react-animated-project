import React from "react";
import { useNavigate } from "react-router-dom";
import "../Unleash/Unleash.scss";
// import "./influence.scss";
// import Influencer1 from "../../assets/Images/Influencer1.jpeg";
// import Influencer2 from "../../assets/Images/Influencer3.jpeg";
// import Influencer3 from "../../assets/Images/Influencer4.jpeg";
import Influencers from "../../assets/Images/influencers.png";

const InfluencerShop = () => {
  const navigate = useNavigate();
  return (
    <div className="d-lg-flex mb-5 my-5">
      <div className="col-lg-6 text-center d-lg-none d-flex justify-content-center flex-column px-5 ms-md-4">
        <div
          className="fw-normal mb-4 mt-4 text-grad"
          // style={{ lineHeight: "1.4" }}
        >
          Vidbling Influencer Shop & <br /> Subscription Platform for Creators
        </div>
        <p className="mb-5 infleunce-tex">
          Welcome to Vidbling, the ultimate platform for creators and
          influencers to thrive and monetize their content. With Vidbling you
          can set up your own shop within the platform, customize subscription
          packages, and connect with brands seeking for expertise and audience.
        </p>
        <div>
          <div
            className="d-flex justify-content-center mb-5"
            data-aos="fade-up"
          >
            <div className="box position-relative me-0"></div>
            <div
              className="gradient-border1  fw-bold joinnow-div position-absolute"
              id="gradient-btn"
              style={{ marginTop: "4px", marginLeft: 0, fontSize: 22 }}
            >
              <div onClick={() => navigate("/signup")}>Join Now</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-lg-6 row">
        {/* <div></div> 
        <img
          src={Influencer2}
          className="col-4 img-fluid"
          alt="img"
          style={{
            borderRadius: 14,
            height: "fit-content",
            width: "30%",

            marginLeft: "-140px",
            marginRight: 50,
          }}
        />
        <img
          src={Influencer1}
          className="col-4 img-fluid"
          alt="img"
          style={{
            borderRadius: 14,
            height: "fit-content",
            width: "30%",
            marginTop: 120,
            marginRight: 50,
          }}
        />
        <img
          src={Influencer3}
          className="mt-4 col-4 img-fluid"
          alt="img"
          style={{ borderRadius: 14, width: "30%", height: "fit-content" }}
        />
      </div> */}
      <div className="col-lg-5  row">
        <img src={Influencers} height={"auto"} className="img-fluid" alt="" />
      </div>
      <div className="col-lg-6 d-lg-block d-none px-5 ms-4">
        <h3
          className="fw-normal mb-4 mt-4 text-grad"
          style={{ lineHeight: "1.4" }}
        >
          Vidbling Influencer Shop & <br /> Subscription Platform for Creators
        </h3>
        <p style={{ lineHeight: "2" }} className="mb-5  infleunce-tex">
          Welcome to Vidbling, the ultimate platform for creators and
          influencers to thrive and monetize their content. With Vidbling you
          can set up your own shop within the platform, customize subscription
          packages, and connect with brands seeking for expertise and audience.
        </p>
        <div data-aos="fade-up" className="mt-4 home-main-div">
          <div className="box position-relative"></div>

          <div
            className="gradient-border1 joinnow-div position-absolute"
            style={{ marginTop: "-71px", marginLeft: "6px" }}
          >
            <div onClick={() => navigate("/signup")}>Join Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerShop;
