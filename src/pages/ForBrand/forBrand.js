import React from "react";
import BrandSuccess from "../../component/BrandSuccess/BrandSuccess";
import BestBrand from "../../component/BestBrand/BestBrand";
import Branding from "../../component/Branding/Branding";
import Webs from "../../component/Webs/Webs";
import LetsTalk from "../../component/LetsTalk/letsTalk";
import OurEnvironment from "../../component/OurEnvironment/ourEnvironment";
import Explode from "../../component/Explode/Explode";
import Brilliance from "../../component/Brilliance/Brilliance";
import Services from "../../component/Services/Services1";
import Header from "../../component/Header/Header";
import DriveSales from "../../component/DriveSales/driveSales";
import HowWorksCom from "../../component/HowWorks/HowWorks";
import ElevateBrand from "../../component/ElevateBrand/ElevateBrand";
import Footer from "../../component/Footer/Footer";
import "./forBrand.scss";

const ForBrand = () => {
  return (
    <React.Fragment>
      <div className="brand-main-div">
        <Header />
        <BrandSuccess />
        <BestBrand />
        <Branding />
        {/* <Webs />*/}
        <Explode />
        <Brilliance />
        {/* <Services /> */}
        <DriveSales />
        <HowWorksCom />
        <ElevateBrand />
        <OurEnvironment />
        <LetsTalk />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ForBrand;
