import React,{useEffect} from "react";
import "./BestBrand.scss";

import Aos from "aos";


const BestBrand = () => {
  useEffect(() => {
    Aos.init({ duration: 3000});
  }, []);
  return (
    <React.Fragment>
      <div className="best-brand-main-div container my-sm-5 mt-0 mb-5 pt-sm-5">
      <div className="py-4 py-md-0 mt-sm-5"></div>
        <div className="title-div d-flex justify-content-center mt-sm-5">
          <h2 className="title">The world's best brands trust Vidbling</h2>
        </div>
        <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center" >
        <div data-aos="fade-up" className="mt-4 mx-auto">
            <div className="box position-relative"></div>
            <div
              className=" gradient-border1 joinnow-div position-absolute top-btn-div"
              style={{ marginTop: "-71px", marginLeft: "6px" }}
            >
              <div className="fon h4">Get a demo</div>
            </div>
          </div>
          </div>
        </div>
        <div className="py-3 my-md-5">

        </div>
      </div>
    </React.Fragment>
  );
};

export default BestBrand;
