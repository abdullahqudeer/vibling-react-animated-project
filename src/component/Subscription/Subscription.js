import React, { useRef } from "react";
import "./Subscription.scss";
import secondPhone from "../../assets/Images/secondPhone.png";
import subvideo0 from "../../assets/videos/Untitled design_4.mp4";
import subvideo1 from "../../assets/videos/Untitled design.mp4";
import subvideo2 from "../../assets/videos/Untitled design_3.mp4";
import { useScroll, useTransform, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const targetRef = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const texty = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ["30vh", "0vh", "0vh"]
  );
  const texto = useTransform(scrollYProgress, [0, 0.16, 0.25, 1], [0, 0, 1, 1]);
  const y1 = useTransform(
    scrollYProgress,
    [0.2, 0.4, 1],
    ["70vh", "0vh", "0vh"]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.5, 0.7, 1],
    ["70vh", "0vh", "0vh"]
  );
  const y3 = useTransform(scrollYProgress, [0.8, 1, 1], ["70vh", "0vh", "0vh"]);
  const o = useTransform(scrollYProgress, [0.0, 0.25, 0.35, 1], [1, 1, 0, 0]);
  const o1 = useTransform(scrollYProgress, [0.0, 0.55, 0.65, 1], [1, 1, 0, 0]);
  const o2 = useTransform(scrollYProgress, [0.0, 0.85, 0.95, 1], [1, 1, 0, 0]);

  return (
    <div ref={targetRef} style={{ height: "300vh" }}>
      <div
        className="subscpition-main-div d-lg-flex"
        style={{ position: "sticky" }}
      >
        <div className="text-div">
          {/* <motion.div
            transition={{ ease: "easeInOut" }}
            style={{ y: texty, position: "relative", opacity: texto }}
            className="mt-2"
          >
            Embrace the{" "}
       
          </motion.div> */}
          <motion.div
            transition={{ ease: "easeInOut" }}
            style={{ y: texty, position: "relative", opacity: texto }}
            className="subs-div mt-2"
          >
           The World’s Best Brands Trust Vidbling
          </motion.div>
          <div
            className="startearning-div mt-4 mb-5 mb-lg-0"
            style={{ zIndex: 10000 }}
          >
            <motion.div
              transition={{ ease: "easeInOut" }}
              style={{ y: texty, position: "relative", opacity: texto }}
              className="startearning-div mt-4 "
            >
              <div>
                <div className="box position-relative me-0"></div>

                <div
                  className="gradient-border1 joinnow-div position-absolute"
                  style={{ marginTop: "-71px", marginLeft: 6 }}
                >
                  <div onClick={() => navigate("/signup")}>Start Earning</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <div className="d-flex phone  justify-content-start">
            <img
              src={secondPhone}
              alt="phone"
              className="position-sticky phone2"
            />
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                height: "470px",
                marginTop: "44px",
                position: "absolute",
                left: 0,
              }}
              className="scrollable-content"
            >
              <div>
                <motion.div
                  className="parallex-layer d-flex flex-column justify-content-center parallex1"
                  style={{
                    fontSize: "20px",
                    maxWidth: "fit-content",
                    marginLeft: 45,
                    textAlign: "center",
                    height: 440,
                    position: "absolute",
                    opacity: o,
                  }}
                >
                  <div className="mb-4">
                    <h4>Join Today</h4>
                    <p className="m-0" style={{ fontSize: "11px" }}>
                      Collaborate with top brands.
                    </p>
                  </div>
                  <div>
                    <p className="mb-2" style={{ fontSize: "11px" }}>
                      What is Your TikTok Handle?
                    </p>
                    <div>
                      <input
                        style={{
                          padding: "15px 20px",
                          fontSize: "11px",
                          backgroundColor: "#29272a ",
                        }}
                        type="search"
                        placeholder="@tooturnttom"
                      />
                    </div>
                    <button
                      onClick={() => navigate("/signup")}
                      className="join-btn"
                    >
                      Sign Up
                    </button>
                  </div>
                </motion.div>
                <motion.div
                  style={{
                    position: "absolute",
                    y: y1,
                    opacity: o1,
                  }}
                  className="parallex-layer video1 d-block justify-content-center justify-content-sm-start"
                >
                  <div className="paradiv">
                    <div className="d-flex align-items-center">
                      <div style={{ position: "relative" }}>
                        <video
                          className="video-subs"
                          autoPlay
                          loop
                          playsInline
                          muted
                          style={{
                            // width: "258px",
                            height: 440,
                            paddingLeft: "11px",
                          }}
                        >
                          <source
                            className="top-0"
                            src={subvideo0}
                            type="video/mp4"
                          />
                        </video>

                        <div
                          className="align-self-center back-div back-div1"
                          style={{ marginTop: "-250px" }}
                        >
                          <div className="img-content">
                            <div className=" form-check p-0">
                              <h4
                                className="font-14 fw-semibold ps-3"
                                style={{ marginBottom: "-33px" }}
                              >
                                $450
                              </h4>
                              <button
                                className="subscription mb-2"
                                style={{ fontSize: 12 }}
                                onClick={() => navigate("/signup")}
                              >
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="phone-rightside"
                        style={{
                          background: "black",
                          marginLeft: 20,
                          paddingLeft: 30,
                        }}
                      >
                        <h1>1</h1>
                        <h6>Create your account and link all your socials</h6>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  style={{
                    height: 376,
                    position: "absolute",
                    y: y2,
                    opacity: o2,
                  }}
                  className="parallex-layer video2 d-block justify-content-center justify-content-sm-start"
                >
                  <div className="paradiv">
                    <div className="d-flex align-items-center ">
                      <div style={{ position: "relative" }}>
                        <video
                          className="video-subs"
                          autoPlay
                          loop
                          playsInline
                          muted
                          style={{
                            height: 440,
                            paddingLeft: "11px",
                          }}
                        >
                          <source
                            className="top-0"
                            src={subvideo1}
                            type="video/mp4"
                          />
                        </video>

                        <div
                          className="align-self-center back-div back-div1"
                          style={{ marginTop: "-250px" }}
                        >
                          <div className="img-content">
                            <div className=" form-check p-0">
                              <h4
                                className="font-14 fw-semibold ps-3"
                                style={{ marginBottom: "-33px" }}
                              >
                                $860
                              </h4>
                              <button
                                className="subscription mb-2"
                                style={{ fontSize: 12 }}
                              >
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="phone-rightside ps-4"
                        style={{
                          background: "black",
                          marginLeft: 20,
                          paddingLeft: 20,
                        }}
                      >
                        <h1>2</h1>
                        <h6>
                          Monetize your passion Imagine getting paid to do what
                          you love!
                        </h6>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  style={{
                    height: 440,
                    position: "absolute",
                    y: y3,
                  }}
                  className="parallex-layer video3  d-block justify-content-center justify-content-sm-start"
                >
                  <div className="paradiv">
                    <div className="d-flex align-items-center">
                      <div>
                        <video
                          className="video-subs video-subs3"
                          autoPlay
                          loop
                          playsInline
                          muted
                          style={{
                            height: 440,
                            paddingLeft: "11px",
                          }}
                        >
                          <source
                            className="top-0"
                            src={subvideo2}
                            type="video/mp4"
                          />
                        </video>
                        <div
                          className="align-self-center back-div back-div1"
                          style={{ marginTop: "-250px" }}
                        >
                          <div className="img-content">
                            <div className=" form-check p-0">
                              <h4
                                className=" font-14 fw-semibold pb-2"
                                style={{ marginBottom: "-33px" }}
                              >
                                $1,700
                              </h4>

                              <button
                                className="subscription mb-2"
                                style={{ fontSize: 12 }}
                              >
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="phone-rightside phone3"
                        style={{
                          background: "black",
                          marginLeft: 20,
                          paddingLeft: 20,
                          height: 350,
                        }}
                      >
                        <h1>3</h1>
                        <h6>
                          Join a vibrant community of creators and influencers.
                        </h6>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* <div style={{ height: 100 }} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
