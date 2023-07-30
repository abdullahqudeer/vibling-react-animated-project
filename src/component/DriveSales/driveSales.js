import React, { useRef } from "react";
import phoneFrame from "../../assets/Images/driveframe.png";
import pic1 from "../../assets/Images/drive3.png";
import pic2 from "../../assets/Images/drive2.png";
import pic3 from "../../assets/Images/drive1.png";
import "./DriveSales.scss"
import { useScroll, useTransform, motion } from "framer-motion";

export default function DriveSales() {
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
    <div className="drive-sales">
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
            height: 400,
            position: "relative",
            overflow: "hidden",
          }}
          className="d-flex justify-content-center align-items-center  container px-0"
        >
          <img
            src={phoneFrame}
            alt="phone"
            style={{
              position: "absolute",
              zIndex: 999,
              maxHeight: "400px",
              maxWidth: "861px",
              right: "0",
              top: "0",
            }}
          />
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ width: 260, position: "relative" }}
          >
            <div>
              <motion.img
                style={{
                  position: "relative",
                  opacity: o1,
                  maxHeight: "390px",
                  maxWidth: "530px",
                  transform: "translateX(40%)",
                }}
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
                  maxHeight: "390px",
                  maxWidth: "530px",
                  left: 90,
                }}
                src={pic2}
                alt=""
              />
            </div>
            <div>
              <motion.img
                style={{
                  position: "absolute",
                  height: 540,
                  top: y2,
                  maxHeight: "390px",
                  maxWidth: "530px",
                  left: 90,
                }}
                src={pic3}
                alt=""
              />
            </div>
          </div>

          <motion.div
            style={{ position: "absolute", opacity: o1 }}
            className="left-part"
          >
            <span>Drive Sales</span>
            <p>
              Collaborate with our network of affiliates who will strategically
              promote your brand and drive sales for a revenue-boosting impact.
            </p>
          </motion.div>
          <motion.div
            style={{ position: "absolute", opacity: o2, top: y1 }}
            className="left-part"
          >
            <span>Maximize Brand Reach</span>
            <p>
              Supercharge your brand's reach by tapping into the influential
              network of top creators who will amplify your message to a wider
              audience.
            </p>
          </motion.div>
          <motion.div
            style={{ position: "absolute", top: y2 }}
            className="left-part"
          >
            <span>Viral Campaigns</span>
            <p>
              Viral Campaigns Tap into the power of user-generated content and
              our sub-accounts feature to create viral campaigns that skyrocket
              brand visibility.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
}

// const OurEnvironment = () => {

//   return (

//   );
// };

// export default OurEnvironment;
