import React, { Fragment } from "react";
import Header from "./../component/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <div className="horizontalMenucontainer">
        <div className="page">
          <div className="page-main">
            <Header />

            <div className="jumps-prevent d-md-block d-none"></div>
            <div
              className="main-content app-content mt-0"
              style={{ paddingTop: "75px" }}
              onClick={() => {}}
            >
              <div className="side-app">
                <div className="main-container ">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
