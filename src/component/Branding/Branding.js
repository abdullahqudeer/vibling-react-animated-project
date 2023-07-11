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
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="marquee-div">
      <Marquee speed={250}>
        <div>
          <img src={zara} />
        </div>
        <div>
          <img src={esprit} />
        </div>
        <div>
          <img src={mango} />
        </div>
        <div>
          <img src={target} />
        </div>
        <div>
          <img src={jockey} />
        </div>
        <div>
          <img src={marks} />
        </div>
        <div>
          <img src={zara} />
        </div>
        <div>
          <img src={esprit} />
        </div>
        <div>
          <img src={mango} />
        </div>
        <div>
          <img src={target} />
        </div>
        <div>
          <img src={jockey} />
        </div>
        <div>
          <img src={marks} />
        </div>
      </Marquee>
    </div>
  );
};

export default Branding;
