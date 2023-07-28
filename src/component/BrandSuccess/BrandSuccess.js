import React, { useRef } from "react";
import "./BrandSuccess.scss";
import LogoImg from "../../assets/Images/image 1.png";
import secondPhone from "../../assets/Images/secondPhone.png";
import iphoneImg1 from "../../assets/Images/Phone 1.png";
import iphoneImg2 from "../../assets/Images/Phone 2.png";
import PolygonImg1 from "../../assets/Images/Polygon6.png";
import PolygonImg2 from "../../assets/Images/Polygon5.png";
import { useScroll, useTransform, motion } from "framer-motion";

const BrandSuccess = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end center", "end end"],
  });

  console.log(scrollYProgress);

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

  return (
    <div
      ref={targetRef}
      style={{ height: "100vh" }}
      className="brand-success-main-div"
    >
      <div className="brand-inner-div  py-5 ">
        <div className="container mb-5 pb-3">
          <div className="row">
            <div className="left-part col-lg-6 col-md-12 col-sm-12 px-2 my-5">
              <h3 className="content">
                Go Viral With <span>Vidbling</span>: Elevate Your Brand's{" "}
                <span>Success!</span>
              </h3>
            </div>
            <div className="right-part col-lg-6 col-md-12 col-sm-12 d-flex">
              <div className="images-div">
                <motion.div
                  transition={{ ease: "easeInOut" }}
                  style={{ y: logo }}
                >
                  <motion.img
                    src={LogoImg}
                    alt="logo"
                    width={362}
                    height={406}
                  />
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
                  <img src={iphoneImg1} alt="iphoneImg" width={659} />
                </motion.div>

                <motion.div
                  transition={{ ease: "easeInOut" }}
                  style={{ y: scnd }}
                  className="second-div"
                >
                  <img src={iphoneImg2} alt="iphoneImg" width={639} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSuccess;
