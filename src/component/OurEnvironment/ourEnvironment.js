import React, { useRef } from "react";
import phoneFrame from "../../assets/Images/secondPhone.png";
import pic1 from "../../assets/Images/OurEnvironment1.png";
import pic3 from "../../assets/Images/OurEnvironment2.png";
import ReactPlayer from "react-player/lazy";
import vid1 from "../../assets/videos/video6.mp4";
import vid2 from "../../assets/videos/video3.mp4";

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
        style={{ height: "100vh", paddingTop: 60, position: "sticky", top: 0 }}
        className="d-flex justify-content-center align-items-center stick "
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
          className="main-wrapper d-flex justify-content-end justify-content-lg-center align-items-center  container px-4"
        >
          <img
            className="phone-frame"
            src={phoneFrame}
            alt="phone"
            style={{ position: "absolute", zIndex: 999 }}
          />
          <div
            className="video-wrapper d-flex flex-column justify-content-center align-items-center"
            style={{ width: 260, position: "relative" }}
          >
            <div>
              <motion.div
                className="video-wrapper wrapper1"
                style={{ position: "relative", opacity: o1 }}
              >
                <ReactPlayer
                  muted
                  loop={true}
                  width={"100%"}
                  height={"100%"}
                  playing={true}
                  url={vid1}
                />
              </motion.div>
            </div>
            <div>
              <motion.div
                className="video-wrapper wrapper2"
                style={{ position: "absolute", left: 2, top: y1 }}
              >
                <ReactPlayer
                  muted
                  loop={true}
                  width={"100%"}
                  height={"100%"}
                  playing={true}
                  url={vid2}
                />
              </motion.div>
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
            className="third-left-part "
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
