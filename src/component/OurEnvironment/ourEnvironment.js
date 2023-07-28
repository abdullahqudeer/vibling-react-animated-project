import React, { useRef } from "react";
import phoneFrame from "../../assets/Images/secondPhone.png";
import pic1 from "../../assets/Images/environment1.png";
import pic2 from "../../assets/Images/environment2.png";
import pic3 from "../../assets/Images/environment3.png";

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
    [0.5, 0.6, 1],
    ["70vh", "0vh", "0vh"]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    ["70vh", "0vh", "0vh"]
  );

  const o1 = useTransform(scrollYProgress, [0.0, 0.45, 0.52, 1], [1, 1, 0, 0]);
  const o2 = useTransform(scrollYProgress, [0.0, 0.75, 0.82, 1], [1, 1, 0, 0]);

  return (
    <div
      ref={targetRef}
      style={{ height: "300vh", paddingTop: 100, position: "relative" }}
      className="bg-environment"
    >
      <div
        style={{ height: "100vh", position: "sticky", top: 0 }}
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
                style={{
                  position: "absolute",
                  height: 540,
                  left: 2,
                  top: y1,
                  opacity: o2,
                }}
                src={pic2}
                alt=""
              />
            </div>
            <div>
              <motion.img
                style={{ position: "absolute", height: 540, left: 2, top: y2 }}
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
            <p>
              Tailor your influencer campaigns to align with your specific goals
              and resonate with your audience.
            </p>
          </motion.div>
          <motion.div
            style={{ position: "absolute", opacity: o2, top: y1 }}
            className="second-right-part"
          >
            <span>Seamless Integration</span>
            <p>
              Effortlessly integrate Vidbling with your existing marketing stack
              for streamlined workflows.
            </p>
          </motion.div>
          <motion.div
            style={{ position: "absolute", top: y2 }}
            className="third-left-part"
          >
            <span>Targeted Audience Segmentation</span>
            <p>
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
