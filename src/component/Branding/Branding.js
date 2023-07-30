import React from "react";
import zara from "../../assets/Images/zara.svg";
import esprit from "../../assets/Images/esprit.svg";
import mango from "../../assets/Images/mango.svg";
import target from "../../assets/Images/target.svg";
import jockey from "../../assets/Images/jockey.svg";
import marks from "../../assets/Images/marks.svg";

import FoxNews from "../../assets/Images/fox-news.png";
import AbcNews from "../../assets/Images/abc-news.png";
import CNBCNews from "../../assets/Images/cnbc-news.png";

import "./Branding.scss";
import Marquee from "react-fast-marquee";

const Branding = ({ isShowNews }) => {
  return (
    <div className="branding-main-div">
      <div className="marquee-div">
        <Marquee speed={400} pauseOnHover>
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
      {isShowNews ? (
        <div className="news-channels-div my-5">
          <div className="py-4"></div>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div class="col-md-2 news-image">
                <img src={FoxNews} alt="Fox News" />
              </div>
              <div class="col-md-2 news-image">
                <img src={AbcNews} alt="ABC News" />
              </div>
              <div class="col-md-2 news-image">
                <img src={CNBCNews} alt="CNBC" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Branding;
