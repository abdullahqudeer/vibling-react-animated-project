import React, { useRef } from "react";
import phoneFrame from "../../assets/Images/secondPhone.png";
import pic2 from "../../assets/Images/works2.png";
import pic3 from "../../assets/Images/works3.png";
import pic6 from "../../assets/Images/works6.png";
import pic7 from "../../assets/Images/dashboad-mobile.png";
import pic8 from "../../assets/Images/works8.png";
import pic9 from "../../assets/Images/works9.png";
import pic11 from "../../assets/Images/3dicons.png";
import pic12 from "../../assets/Images/3dicons (3).png";
import pic13 from "../../assets/Images/3dicons (1).png";
import pic14 from "../../assets/Images/3dicons (2).png";
import polygonRight from "../../assets/Images/Polygon5.png";
import ReactPlayer from "react-player/lazy";
import vid1 from "../../assets/videos/video1.mp4";
import vid2 from "../../assets/videos/video5.mp4";
import vid3 from "../../assets/videos/vid2.mp4";

import "./HowWorks.scss";

import { useScroll, useTransform, motion } from "framer-motion";

export default function HowWorksCom() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const y1 = useTransform(
    scrollYProgress,
    [0.2, 0.25, 1],
    ["100vh", "0vh", "0vh"]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.3, 0.35, 1],
    ["100vh", "0vh", "0vh"]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0.4, 0.45, 1],
    ["100vh", "0vh", "0vh"]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0.5, 0.55, 1],
    ["100vh", "0vh", "0vh"]
  );
  const y5 = useTransform(
    scrollYProgress,
    [0.6, 0.65, 1],
    ["100vh", "0vh", "0vh"]
  );
  const y6 = useTransform(
    scrollYProgress,
    [0.7, 0.75, 1],
    ["100vh", "0vh", "0vh"]
  );
  const y7 = useTransform(
    scrollYProgress,
    [0.8, 0.85, 1],
    ["100vh", "0vh", "0vh"]
  );
  const y8 = useTransform(
    scrollYProgress,
    [0.9, 0.95, 1],
    ["100vh", "0vh", "0vh"]
  );

  const o1 = useTransform(scrollYProgress, [0.0, 0.2, 0.25, 1], [1, 1, 0, 0]);
  const o2 = useTransform(scrollYProgress, [0.0, 0.3, 0.35, 1], [1, 1, 0, 0]);
  const o3 = useTransform(scrollYProgress, [0.0, 0.4, 0.45, 1], [1, 1, 0, 0]);

  const o4 = useTransform(scrollYProgress, [0.0, 0.5, 0.55, 1], [1, 1, 0, 0]);
  const o5 = useTransform(scrollYProgress, [0.0, 0.6, 0.65, 1], [1, 1, 0, 0]);
  const o6 = useTransform(scrollYProgress, [0.0, 0.7, 0.75, 1], [1, 1, 0, 0]);
  const o7 = useTransform(scrollYProgress, [0.0, 0.8, 0.85, 1], [1, 1, 0, 0]);
  const o8 = useTransform(scrollYProgress, [0.0, 0.9, 0.95, 1], [1, 1, 0, 0]);

  return (
    <div className="how-works-main mt-5 pt-5">
      <div className="py-5"></div>
      <div className="how-works-header">
        <img className="img1" src={pic11} alt=".." />
        <img className="img2" src={pic12} alt=".." />
        <img className="ploygon" src={polygonRight} alt=".." />
        <img className="img3" src={pic13} alt=".." />
        <img className="img4" src={pic14} alt=".." />
        <h1>How It Works?</h1>
        <h6 className="mt-3">
          We combine the power of <br />
          <span> subscription-based</span> partnerships with <br />
          <span> cutting-edge</span> technology, data, strategy, and <br />{" "}
          creatives to help you drive virality and profitable <br />
          <span> hyper-growth.</span>
        </h6>
      </div>
      <div
        ref={targetRef}
        style={{ height: "900vh", paddingTop: 100, position: "relative" }}
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
                <motion.div style={{ position: "relative", opacity: o1 }}>
                  <ReactPlayer
                    muted
                    loop={true}
                    width={"100%"}
                    height={540}
                    playing={true}
                    url={vid1}
                  />
                </motion.div>
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
                  style={{
                    position: "absolute",
                    height: 540,
                    left: 2,
                    top: y2,
                    opacity: o3,
                  }}
                  src={pic3}
                  alt=""
                />
              </div>
              <div>
                <motion.div
                  style={{
                    position: "absolute",
                    left: 2,
                    top: y3,
                    opacity: o4,
                  }}
                >
                  <ReactPlayer
                    muted
                    loop={true}
                    width={"100%"}
                    height={540}
                    playing={true}
                    url={vid2}
                  />
                </motion.div>
              </div>
              <div>
                <motion.div
                  style={{
                    position: "absolute",
                    left: 2,
                    top: y4,
                    opacity: o5,
                  }}
                >
                  <ReactPlayer
                    muted
                    loop={true}
                    width={"100%"}
                    height={540}
                    playing={true}
                    url={vid3}
                  />
                </motion.div>
              </div>
              <div>
                <motion.img
                  style={{
                    position: "absolute",
                    height: 540,
                    left: 2,
                    top: y5,
                    opacity: o6,
                  }}
                  src={pic6}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  style={{
                    position: "absolute",
                    height: 540,
                    left: 2,
                    top: y6,
                    opacity: o7,
                  }}
                  src={pic7}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  style={{
                    position: "absolute",
                    height: 540,
                    left: 2,
                    top: y7,
                    opacity: o8,
                  }}
                  src={pic8}
                  alt=""
                />
              </div>
              <div>
                <motion.img
                  style={{
                    position: "absolute",
                    height: 540,
                    left: 2,
                    top: y8,
                  }}
                  src={pic9}
                  alt=""
                />
              </div>
            </div>

            <motion.div
              style={{ position: "absolute", opacity: o1 }}
              className="left-part"
            >
              <span>Connect with top Creators</span>
              <p>
                Tailor your influencer campaigns to align with your specific
                goals and resonate with your audience.
              </p>
            </motion.div>
            <motion.div
              style={{ position: "absolute", opacity: o2, top: y1 }}
              className="second-right-part"
            >
              <span>
                Choose the social media channels you would like to go Viral on.
              </span>
            </motion.div>
            <motion.div
              style={{ position: "absolute", opacity: o3, top: y2 }}
              className="third-left-part"
            >
              <span>AI-Powered Recommendations</span>
              <p>
                Our advanced algorithm will curate a personalized list of
                creators that perfectly align with your brand, target market,
                and niche.
              </p>
            </motion.div>
            <motion.div
              style={{ position: "absolute", opacity: o4, top: y3 }}
              className="second-right-part"
            >
              <span>Subscribe to Your Favorites</span>
              <p>
                Subscribe to your favorite creators and influencers, ensuring a
                steady flow of captivating content and increased brand
                visibility.
              </p>
            </motion.div>

            <motion.div
              style={{ position: "absolute", opacity: o5, top: y4 }}
              className="third-left-part"
            >
              <span>Leverage our sub-accounts feature</span>
              <p>
                Have an army of users posting video shorts about your brand to
                go Viral
              </p>
            </motion.div>
            <motion.div
              style={{ position: "absolute", opacity: o6, top: y5 }}
              className="second-right-part"
            >
              <span>Explode your sales with Vidbling affiliates</span>
              <p>
                Tap into our powerful affiliate performance marketing program
                and leverage the reach of our trusted affiliates to skyrocket
                your sales.
              </p>
            </motion.div>
            <motion.div
              style={{ position: "absolute", opacity: o7, top: y6 }}
              className="third-left-part"
            >
              <span>Advanced Data Dashboard</span>
              <p>
                Keep a pulse on your campaign and subscription performance with
                our intuitive data dashboard, providing valuable insights for
                optimization.
              </p>
            </motion.div>

            <motion.div
              style={{ position: "absolute", opacity: o8, top: y7 }}
              className="third-left-part"
            >
              <span>Seamless Integration</span>
              <p>
                Connect Vidbling seamlessly to your Shopify or WooCommerce
                store, unlocking endless possibilities for streamlined sales and
                customer engagement.
              </p>
            </motion.div>
            <motion.div
              style={{ position: "absolute", top: y8 }}
              className="second-right-part"
            >
              <span>
                Sit back and watch Vidbling skyrocket your business to the moon.
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
