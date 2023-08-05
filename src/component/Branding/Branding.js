import React from "react";
import zara from "../../assets/Images/zara.svg";
import esprit from "../../assets/Images/esprit.svg";
import mango from "../../assets/Images/mango.svg";
import target from "../../assets/Images/target.svg";
import jockey from "../../assets/Images/jockey.svg";
import marks from "../../assets/Images/marks.svg";
import "./Branding.scss";
import Marquee from "react-fast-marquee";

const Branding = () => {
  return (
    <div className="marquee-div">
      <Marquee speed={100} pauseOnHover>
        <div>
          <img src={zara} alt="brands" />
        </div>
        <div>
          <img src={esprit} alt="brands" />
        </div>
        <div>
          <img src={mango} alt="brands" />
        </div>
        <div>
          <img src={target} alt="brands" />
        </div>
        <div>
          <img src={jockey} alt="brands" />
        </div>
        <div>
          <img src={marks} alt="brands" />
        </div>
        <div>
          <img src={zara} alt="brands" />
        </div>
        <div>
          <img src={esprit} alt="brands" />
        </div>
        <div>
          <img src={mango} alt="brands" />
        </div>
        <div>
          <img src={target} alt="brands" />
        </div>
        <div>
          <img src={jockey} alt="brands" />
        </div>
        <div>
          <img src={marks} alt="brands" />
        </div>
      </Marquee>
    </div>
  );
};

export default Branding;
