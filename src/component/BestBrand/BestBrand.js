import React,{useEffect} from "react";
import "./BestBrand.scss";
import Deezer from "../../assets/Images/deezer.png";
import ClickedUp from "../../assets/Images/click-up.png";
import Hopper from "../../assets/Images/hopper.png";
import Unidas from "../../assets/Images/unidas .png";
import Aos from "aos";


const BestBrand = () => {
  useEffect(() => {
    Aos.init({ duration: 3000});
  }, []);
  return (
    <React.Fragment>
      <div className="best-brand-main-div container my-5 pt-5">
        <div className="title-div d-flex justify-content-center">
          <h2 className="title">The world's best brands trust Vidbling</h2>
        </div>
        <div className="d-flex">
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
        <div className="py-5">

        </div>
      </div>
    </React.Fragment>
  );
};

export default BestBrand;
