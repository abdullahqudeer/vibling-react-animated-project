import React from "react";
import "./Footer.scss";
import logo from "../../assets/Images/logo.svg";
import tiktok from "../../assets/Images/tiktok-icon.svg";
import instagram from "../../assets/Images/instagram-icon.svg";
import twitter from "../../assets/Images/twitter-icon.svg";
const Footer = () => {
  return (
    <div className="footer-main-div container mb-3">
      <div className="row ">
        <div className="left-part d-flex flex-column flex-sm-row justify-content-sm-between px-sm-5 col-lg-9 col-md-9 col-sm-12">
          <img
            src={logo}
            alt="logo"
            className="mx-auto mx-sm-0 my-sm-0 my-4"
            style={{ width: "60px" }}
          />
          <div className="content mx-3 text-center text-sm-left my-sm-0 my-4">
            <h6 className="mx-2">© 2022 Vidbling. All right reserved.</h6>
            <div className="con-1 d-sm-flex pt-1">
              <div className="d-sm-flex">
                <h6 className="mx-2">FAQ</h6>
                <h6 className="mx-2">CONTACT</h6>
              </div>
              <div className="d-sm-flex">
                <h6 className="mx-2">PRIVACY</h6>
                <h6 className="mx-2">TERMS OF USE</h6>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-lg-3 col-md-3 col-sm-12 d-flex justify-content-md-end align-items-md-end mb-2 right-part ms-sm-5 ms-md-0 ps-sm-4 ps-md-0 mt-2 justify-content-center align-items-center w-sm-auto"
          // style={{ width: "auto" }}
        >
          <img src={tiktok} alt="tiktok" className="mx-1" />
          <img src={instagram} alt="instagram" className="mx-1" />
          <img src={twitter} alt="twitter" className="mx-1" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
