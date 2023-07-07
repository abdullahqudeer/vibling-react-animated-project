import React, { Fragment } from "react";
import headerLogo from "../assets/Images/header-logo.svg";
import "./Header.scss";
const Header = () => {
  return (
    <Fragment>
      <div className="container header-main-div">
        <div className="header-div">

        <div className="images-div">
          <img src={headerLogo} />
        </div>
        <div className="header-menu">
            <p>For Brand</p>
            <p>About Us</p>
            <p>About Us</p>
        </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
