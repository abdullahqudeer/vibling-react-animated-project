import React, { useRef } from "react";
import "./GetStartedStep.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import phoneFrame from "../../assets/Images/secondPhone.png";
import pic1 from "../../assets/Images/images1.png";
import pic2 from "../../assets/Images/images2.png";
import pic3 from "../../assets/Images/images3.png";
import pic4 from "../../assets/Images/images4.png";
import pic5 from "../../assets/Images/images5.png";

const GetStartedStep = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const y1 = useTransform(
    scrollYProgress,
    [0.4, 0.45, 1],
    ["100vh", "0vh", "0vh"]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.5, 0.65, 1],
    ["100vh", "0vh", "0vh"]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0.7, 0.85, 1],
    ["100vh", "0vh", "0vh"]
  );
  const y4 = useTransform(
    scrollYProgress,
    [0.9, 0.95, 1],
    ["100vh", "0vh", "0vh"]
  );

  const o1 = useTransform(scrollYProgress, [0.0, 0.4, 0.45, 1], [1, 1, 0, 0]);
  const o2 = useTransform(scrollYProgress, [0.0, 0.5, 0.6, 1], [1, 1, 0, 0]);
  const o3 = useTransform(scrollYProgress, [0.0, 0.7, 0.8, 1], [1, 1, 0, 0]);
  const o4 = useTransform(scrollYProgress, [0.0, 0.9, 0.99, 1], [1, 1, 0, 0]);
  return (
    <React.Fragment>
      <div className="get-started-step-div">
        <div className="title-div mt-5 pt-4">
          <h4 className="my-4">5 Steps To Get Started</h4>
        </div>
        <div
          ref={targetRef}
          style={{ height: "400vh", paddingTop: 60, position: "relative" }}
          className="get-started"
        >
          <div
            style={{ height: "100vh", position: "sticky", top: 0 }}
            className="d-flex justify-content-center align-items-center stick"
          >
            <img
              src={phoneFrame}
              alt="phone"
              style={{ position: "absolute", zIndex: 999 }}
              className="phone-frame-img"
            />
            <div
              style={{
                height: 510,
                position: "relative",
                overflow: "hidden",
              }}
              className="d-flex justify-content-center align-items-center container px-4 phone-inner-div"
            >
              <div
                className="d-flex flex-column justify-content-center align-items-center photo1"
                style={{ width: 260, height: 520, position: "relative" }}
              >
                <div>
                  <motion.img
                    style={{ position: "relative", height: 540, opacity: o1 }}
                    src={pic1}
                    alt=""
                    className="photo1"
                  />
                </div>
                <div>
                  <motion.img
                    style={{
                      position: "absolute",
                      height: 575,
                      left: "-0px",
                      top: y1,
                      width: "100%",
                      opacity: o2,
                    }}
                    src={pic2}
                    alt=""
                    className="photo2"
                  />
                </div>
                <div>
                  <motion.img
                    style={{
                      position: "absolute",
                      height: 540,
                      borderRadius: "30px",
                      left: 2,
                      top: y2,
                      opacity: o3,
                    }}
                    src={pic3}
                    alt=""
                    className="photo3"
                  />
                </div>
                <div>
                  <motion.img
                    style={{
                      position: "absolute",
                      height: 540,
                      left: 2,
                      top: y3,
                      opacity: o4,
                    }}
                    src={pic4}
                    alt=""
                    className="photo4"
                  />
                </div>
                <div>
                  <motion.img
                    style={{
                      position: "absolute",
                      height: 575,
                      left: "0px",
                      top: y4,
                      width: "100%",
                    }}
                    src={pic5}
                    alt=""
                    className="photo5"
                  />
                </div>
              </div>

              <motion.div
                style={{
                  position: "absolute",
                  borderRadius: "40px",
                  height: 540,
                  opacity: o1,
                }}
                className="leftpart mt-5 pt-5"
              >
                <span className="number-span">1.</span>
                <p className="ps-5">Create Your Vidbling Account</p>
              </motion.div>
              <motion.div
                style={{
                  position: "absolute",
                  borderRadius: "40px",
                  height: 540,
                  opacity: o2,
                  top: y1,
                }}
                className="second-rightpart  mt-5"
              >
                <span className="number-span">2.</span>
                <p>Choose Your Channels</p>
                <h6>
                  Subscribe to your favorite creators and influencers, ensuring
                  a steady flow of captivating content and increased brand
                  visibility.
                </h6>
              </motion.div>
              <motion.div
                style={{
                  position: "absolute",
                  borderRadius: "40px",
                  height: 540,
                  opacity: o3,
                  top: y2,
                }}
                className="leftpart mt-5"
              >
                <span className="number-span">3.</span>
                <p className="ms-4">
                  Customize Your Subscription Packages To Offer Unique and
                  Enticing Content Options
                </p>
              </motion.div>
              <motion.div
                style={{
                  position: "absolute",
                  borderRadius: "40px",
                  height: 540,
                  opacity: o4,
                  top: y3,
                }}
                className="second-rightpart mt-5"
              >
                <span className="number-span">4.</span>
                <p>Promote Your Storefront</p>
                <h6 className="mt-2 pe-5">
                  Get your personalized storefront link and start promoting it
                  across your social platforms to attract brand collaborations.
                </h6>
              </motion.div>
              <motion.div
                style={{ position: "absolute", top: y4 }}
                className="leftpart mt-5"
              >
                <span className="number-span">5.</span>
                <p>Unlock Earnings</p>
                <h6 className="ms-4">
                  Start earning by collaborating with brands, generating sales,
                  and monetizing your creativity through Vidbling's powerful
                  platform.
                </h6>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default GetStartedStep;
