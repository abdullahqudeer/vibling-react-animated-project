import React, { useRef } from "react";
import "./Services.scss";
import { useScroll, useTransform, motion } from "framer-motion";
  import image1 from "../../assets/Images/bgImage1.png";
import image2 from "../../assets/Images/bgImage2.png";
import image3 from "../../assets/Images/bgImage3.png";
import image4 from "../../assets/Images/bgImage4.png";

const Subscription = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

 
  const y1 = useTransform(scrollYProgress, [1], ["0vh"]);
  const y2 = useTransform(scrollYProgress, [1], ["0vh"]);
  const y3 = useTransform(scrollYProgress, [1], ["0vh"]);
  const y4 = useTransform(scrollYProgress, [1], ["0vh"]);

  return (
    <div ref={targetRef} style={{ height: "100%" }}>
      <div className="services-main-div d-lg-flex">
        <div>
          <div className="d-flex phone  justify-content-start">
            <div
              style={{
                overflow: "hidden",

                left: 0,
              }}
              className="scrollable-content"
            >
              <div>
                <motion.div
                  className="parallex-layer d-flex flex-column justify-content-center parallex1"
                  style={{
                    fontSize: "20px",
                    maxWidth: "100%",
                    y: y1,
                    textAlign: "center",
                  }}
                >
                  <div className="image-div">
                    <img src={image1} />
                  </div>
                </motion.div>
                <motion.div
                  style={{
                    // position: "absolute",
                    y: y2,
                    // opacity: o1,
                  }}
                  className="parallex-layer video1 d-block justify-content-center justify-content-sm-start"
                >
                  <div className="image-div">
                    <img src={image2} />
                  </div>
                </motion.div>
                <motion.div
                  style={{
                    y: y3,
                  }}
                  className="parallex-layer video2 d-block justify-content-center justify-content-sm-start"
                >
                  <div className="image-div">
                    <img src={image3} />
                  </div>
                </motion.div>
                <motion.div
                  style={{
                    y: y4,
                  }}
                  className="parallex-layer video3  d-block justify-content-center justify-content-sm-start"
                >
                  <div className="image-div">
                    <img src={image4} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
