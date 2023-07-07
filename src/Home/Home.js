import React from "react";
import "./Home.scss";
import Charlie from "../component/Charlie/Charlie";
import JoinNow from "../component/JoinNow/JoinNow";
import Footer from "../component/Footer/Footer";
import Creativity from "../component/Creativity/Creativity";
import Thrive from "../component/Thrive/Thrive";
import StarsImage from "../component/StarsImage/StarsImage";
import Unleash from "../component/Unleash/Unleash";
import Branding from "../component/Branding/Branding";
import Passion from "../component/Passion/Passion";
import Iphone from "../component/Iphone/Iphone";
import EasyPay from "../component/EasyPay/EasyPay";
import Subscription from "../component/Subscription/Subscription";
import InfluencerShop from "../component/InfluencerShop/InfluencerShop";
import Features from "../component/Features/Features";

const Home = () => {
  return (
    <>
      <div className="home-main-div container">
        <Unleash />
      </div>

      <Branding />
      <InfluencerShop />
      <div className="home-main-div container">
        <Passion />
      </div>
      <Iphone />
      <Creativity />
      <div className="home-main-div container">
        <EasyPay />

        <Subscription />
      </div>
      <Features />
      <div className="home-main-div container">
        <Thrive />
        <StarsImage />
        <Charlie />
        <JoinNow />
        <Footer />
      </div>
    </>
  );
};

export default Home;
