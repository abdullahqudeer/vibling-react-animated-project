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
  const y2 = useTransform(scrollYProgress, [0.3, 0.38], ["100vh", "0vh"]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.68], ["100vh", "0vh"]);
  const y4 = useTransform(scrollYProgress, [0.9, 0.98], ["100vh", "0vh"]);
  return (
    <div
      ref={targetRef}
      style={{
        // position: "relative",
        height: "500vh",
        marginBottom: "100vh",
        // overflow: "hidden",
        // overflowY: "auto",
      }}
    >
      {/* <div style={{ position: "relative" }}> */}
      <div style={{ position: "sticky", top: 0 }}>
        <div>
          <motion.div
            style={{
              position: "absolute",
              y: y1,
              // overflow: "hidden",
            }}
          >
            <img style={{ width: "99.3vw" }} src={image1} alt="serviceimage" />
          </motion.div>
        </div>
        <div>
          <motion.div
            style={{
              position: "absolute",
              y: y2,
              // overflow: "hidden",
            }}
          >
            <img style={{ width: "99.3vw" }} src={image2} alt="serviceimage" />
          </motion.div>
        </div>
        <div>
          <motion.div
            style={{
              position: "absolute",
              y: y3,
              // overflow: "hidden",
            }}
          >
            <img style={{ width: "99.3vw" }} src={image3} alt="serviceimage" />
          </motion.div>
        </div>
        <div>
          <motion.div
            style={{
              position: "absolute",
              y: y4,
              // overflow: "hidden",
            }}
          >
            <img style={{ width: "99.3vw" }} src={image4} alt="serviceimage" />
          </motion.div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Subscription;
