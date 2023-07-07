import React, { Fragment } from "react";
import headerLogo from "../../assets/Images/header-logo.svg";
import "./Header.scss";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="container header-main-div">
        <div className="header-div ">
          <div
            style={{ cursor: "pointer" }}
            className="images-div d-flex d-sm-block align-items-center justify-content-between mt-3 mt-sm-0 "
          >
            <img src={headerLogo} alt="logo" onClick={() => navigate("/")} />
            <div className="d-block d-md-none">
              <HiOutlineBars3 size={25} style={{ marginLeft: "-25px" }} />
            </div>
          </div>

          <div className="header-menu mt-2 mt-sm-0 d-none d-md-flex ">
            <p className="mx-sm-3 mx-2">For Brand</p>
            <p className="mx-sm-3 mx-2">About Us</p>
            <button className="login mx-sm-3 mx-2">Login</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
