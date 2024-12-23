import React, { useRef, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import "./BrandSuccess.scss";
import LogoImg from "../../assets/Images/image 1.png";
import PolygonImg1 from "../../assets/Images/Polygon6.png";
import PolygonImg2 from "../../assets/Images/Polygon5.png";
import phoneFrame from "../../assets/Images/secondPhone.png";
import TwitterIcon from "../../assets/Images/ico-twitter.png";
import FacebookIcon from "../../assets/Images/ico-facebook.png";
import InstagramIcon from "../../assets/Images/ico-instagram.png";
import AmazonIcon from "../../assets/Images/ico-amazon.png";
import vid1 from "../../assets/videos/video7.mp4";
import vid2 from "../../assets/videos/video8.mp4";

import { useScroll, useTransform, motion } from "framer-motion";
import Aos from "aos";
const BrandSuccess = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end center", "end end"],
  });
  const first = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8],
    ["-170px", "-170px", "-400px"]
  );
  const firstx = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8],
    ["-80px", "-80px", "0px"]
  );
  const logo = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ["3vh", "0vh", "0vh"]
  );
  const scnd = useTransform(scrollYProgress, [0, 0.6], ["0px", "700px"]);
  const poly1 = useTransform(scrollYProgress, [0, 1], ["0", "-50px"]);
  const poly1x = useTransform(scrollYProgress, [0, 1], ["-1000px", "-400px"]);
  const poly2 = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["0vh", "0vh", "30vh"]
  );
  const poly2X = useTransform(
    scrollYProgress,
    
    [0, 0.1, 1],
    ["0px", "0px", "-350px"]
  );
  const poly2R = useTransform(scrollYProgress, [0, 1], ["70deg", "-10deg"]);
  useEffect(() => {
    Aos.init({ duration: 0 });
  }, []);
  return (
    <div
      ref={targetRef}
      style={{ height: "100vh" }}
      className="brand-success-main-div  mt-0 pt-0 pt-md-5"
    >
      <div className="brand-inner-div  py-0 py-md-5 ">
        <div className="container mb-5 pb-3">
          <div className="row">
            <div className="left-part col-lg-6 col-md-12 col-sm-12 px-2 my-5">
              <h3 className="content">
                Go Viral With <span>Vidbling</span>: <br /> Elevate Your Brand's{" "}
                <span>Success!</span>
              </h3>
              <div className="d-flex justify-content-center justify-content-md-start">
                <div data-aos="fade-up" className="mt-4">
                  <div className="box position-relative"></div>
                  <div
                    className="gradient-border1 joinnow-div position-absolute top-btn-div"
                    style={{ marginTop: "-71px", marginLeft: "6px" }}
                  >
                    <div className="fon">Get a demo</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 d-flex  align-items-center social-media-icons justify-content-center justify-content-md-start">
                <img
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                  src={TwitterIcon}
                  alt="twitter"
                />
                <img
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                  src={FacebookIcon}
                  alt="facebook"
                />
                <img
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                  src={InstagramIcon}
                  alt="instagram"
                />
                <img
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                  src={AmazonIcon}
                  alt="amazon"
                />
              </div>
            </div>
            <div className="d-sm-block d-none position-relative mt-5 pt-md-0 pt-5 mt-md-0 right-part col-lg-6 col-md-12 col-sm-12 d-flex">
              <div className="mt-5 mt-md-0 pt-5 pt-md-0"></div>
              <div className="images-div mx-auto">
                <motion.div
                  transition={{ ease: "easeInOut" }}
                  style={{ y: logo }}
                >
                  <motion.img className="logo" src={LogoImg} alt="logo" />
                </motion.div>

                <motion.div
                  transition={{ ease: "easeInOut" }}
                  style={{ y: poly2, x: poly2X }}
                  className="poly-img"
                >
                  <motion.img
                    style={{ rotate: poly2R }}
                    src={PolygonImg2}
                    alt="polygon"
                  />
                </motion.div>
                <motion.div
                  transition={{ ease: "easeInOut" }}
                  style={{ x: poly1 }}
                  className="polygon-img"
                >
                  <motion.img
                    style={{ rotate: poly2R }}
                    src={PolygonImg1}
                    alt="polygon"
                  />
                </motion.div>
              </div>
              <div className="iphone-div d-flex">
                <motion.div
                  transition={{ ease: "easeInOut" }}
                  style={{ y: first, x: firstx }}
                  className="first-div"
                >
                  <div className="phone-wrapper">
                    <img
                      style={{ position: "relative" }}
                      src={phoneFrame}
                      alt="iphoneImg"
                    />
                    <ReactPlayer
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 5,
                        zIndex: -1,
                      }}
                      muted
                      loop={true}
                      width={"100%"}
                      height={"100%"}
                      playing={true}
                      url={vid1}
                    />
                  </div>
                </motion.div>

                <motion.div
                  transition={{ ease: "easeInOut" }}
                  style={{ y: scnd }}
                  className="second-div"
                >
                  <div className="phone-wrapper">
                    <img
                      style={{ position: "relative" }}
                      src={phoneFrame}
                      alt="iphoneImg"
                    />
                    <ReactPlayer
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 5,
                        zIndex: -1,
                      }}
                      muted
                      loop={true}
                      width={"100%"}
                      height={"100%"}
                      playing={true}
                      url={vid2}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="d-sm-none d-block position-relative mt-5 pt-md-0 pt-5 mt-md-0 right-part col-lg-6 col-md-12 col-sm-12 d-flex">
              <div className="mt-5 mt-md-0 pt-5 pt-md-0"></div>
              <div className="images-div mx-auto">
                <div
                // transition={{ ease: "easeInOut" }}
                // style={{ y: logo }}
                >
                  <img className="logo" src={LogoImg} alt="logo" />
                </div>

                <div
                  transition={{ ease: "easeInOut" }}
                  // style={{ y: poly2, x: poly2X }}
                  className="poly-img"
                >
                  <img
                    // style={{ rotate: poly2R }}
                    src={PolygonImg2}
                    alt="polygon"
                  />
                </div>
                <div
                  transition={{ ease: "easeInOut" }}
                  // style={{ x: poly1 }}
                  className="polygon-img"
                >
                  <img
                    // style={{ rotate: poly2R }}
                    src={PolygonImg1}
                    alt="polygon"
                  />
                </div>
              </div>
              <div className="iphone-div d-flex">
                <div
                  transition={{ ease: "easeInOut" }}
                  // style={{ y: first, x: firstx }}
                  className="first-div"
                >
                  <div className="phone-wrapper">
                    <img
                      style={{ position: "relative" }}
                      src={phoneFrame}
                      alt="iphoneImg"
                    />
                    <ReactPlayer
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 5,
                        zIndex: -1,
                      }}
                      className="w-80"
                      muted
                      loop={true}
                      width={"100%"}
                      height={"100%"}
                      playing={true}
                      url={vid1}
                    />
                  </div>
                </div>

                <div
                  transition={{ ease: "easeInOut" }}
                  // style={{ y: scnd }}
                  className="second-div"
                >
                  <div className="phone-wrapper">
                    <img
                      style={{ position: "relative" }}
                      src={phoneFrame}
                      alt="iphoneImg"
                    />
                    <ReactPlayer
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 5,
                        zIndex: -1,
                      }}
                      className="w-80"
                      muted
                      loop={true}
                      width={"100%"}
                      height={"100%"}
                      playing={true}
                      url={vid2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSuccess;
