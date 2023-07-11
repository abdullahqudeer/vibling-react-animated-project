import React from "react";
import BrandSuccess from "../../component/BrandSuccess/BrandSuccess";
import BestBrand from "../../component/BestBrand/BestBrand";
import Branding from "../../component/Branding/Branding";
import Webs from "../../component/Webs/Webs";
import LetsTalk from "../../component/LetsTalk/letsTalk";
import OurEnvironment from "../../component/OurEnvironment/ourEnvironment";
import Explode from "../../component/Explode/Explode";
import Brilliance from "../../component/Brilliance/Brilliance";
import Services from "../../component/Services/Services";

const ForBrand = () => {
  return (
    <React.Fragment>
      <div className="brand-main-div">
        <BrandSuccess />
        <BestBrand />
        <Branding />
        <Webs />
        <Explode />
        <Brilliance />
        <Services />
        <OurEnvironment />
        <LetsTalk />
      </div>
    </React.Fragment>
  );
};

export default ForBrand;
