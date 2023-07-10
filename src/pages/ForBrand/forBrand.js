import React from "react";
import BrandSuccess from "../../component/BrandSuccess/BrandSuccess";
import BestBrand from "../../component/BestBrand/BestBrand";
import Branding from "../../component/Branding/Branding";
import Webs from "../../component/Webs/Webs";
import LetsTalk from "../../component/LetsTalk/letsTalk";
import OurEnvironment from "../../component/OurEnvironment/ourEnvironment";

const ForBrand = () => {
  return (
    <React.Fragment>
      <div className="brand-main-div">
        <BrandSuccess />
        <BestBrand />
        <Branding />
        <Webs />
        <OurEnvironment/>
        <LetsTalk/>
      </div>
    </React.Fragment>
  );
};

export default ForBrand;
