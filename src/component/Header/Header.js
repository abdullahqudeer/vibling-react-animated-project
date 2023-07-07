import React, { Fragment, useState } from "react";
import headerLogo from "../../assets/Images/header-logo.svg";
import "./Header.scss";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <React.Fragment>
      <div className="header-main-div">
        <nav className="navbar">
          <h1 className="navbar-logo">
            <img src={headerLogo} />
          </h1>
          <div className="menu-icon" onClick={handleClick}>
            <span>{active ? <RxCross1 /> : <AiOutlineMenu />}</span>
          </div>

          <div className={active ? "nav-menu active" : "nav-menu"}>
            <p className="mx-3 mt-1">For Brand</p>
            <p className="mx-3 mt-1">About Us</p>
            <div className="d-flex justify-content-center">
              <button className="login mx-3 d-flex">Login</button>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
