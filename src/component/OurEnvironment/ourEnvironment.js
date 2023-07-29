import React, { useRef } from "react";
import phoneFrame from "../../assets/Images/secondPhone.png";
import pic1 from "../../assets/Images/OurEnvironment1.png";
import pic3 from "../../assets/Images/OurEnvironment2.png";

import "./ourEnvironment.scss";
import { useScroll, useTransform, motion } from "framer-motion";

const OurEnvironment = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const y1 = useTransform(
    scrollYProgress,
    [0.6, 0.9, 1],
    ["100vh", "0vh", "0vh"]
  );

  const o1 = useTransform(scrollYProgress, [0.0, 0.6, 0.9, 1], [1, 1, 0, 0]);

  return (
    <div
      ref={targetRef}
      style={{ height: "200vh", position: "relative" }}
      className="bg-environment"
    >
      <div
        style={{ height: "100vh", paddingTop: 200, position: "sticky", top: 0 }}
        className="d-flex justify-content-center align-items-center stick "
      >
        <div
          style={{
            height: 540,
            position: "relative",
            overflow: "hidden",
          }}
          className="d-flex justify-content-center align-items-center  container px-4"
        >
          <img
            src={phoneFrame}
            alt="phone"
            style={{ position: "absolute", zIndex: 999 }}
          />
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ width: 260, position: "relative" }}
          >
            <div>
              <motion.img
                style={{ position: "relative", height: 540, opacity: o1 }}
                src={pic1}
                alt=""
              />
            </div>
            <div>
              <motion.img
                style={{ position: "absolute", height: 540, left: 2, top: y1 }}
                src={pic3}
                alt=""
              />
            </div>
          </div>

          <motion.div
            style={{ position: "absolute", opacity: o1 }}
            className="left-part"
          >
            <span>Customized Campaigns</span>
            <p className="mt-4">
              Tailor your influencer campaigns to align with your specific goals
              and resonate with your audience.
            </p>
          </motion.div>
          <motion.div
            style={{ position: "absolute", top: y1 }}
            className="third-left-part"
          >
            <span>
              Targeted <br />
              Audience Segmentation
            </span>
            <p className="mt-4">
              Identify and connect with niche audiences that align with your
              brand for enhanced campaign effectiveness.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurEnvironment;
