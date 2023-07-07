import React, { useEffect } from "react";
import "./Creativity.scss";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/videos/background-video.mp4";
import Aos from "aos";
const Creativity = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <React.Fragment>
      <div className="  creativity-main-div  mt-5 position-relative">
        <div className="position-absolute overflow-hidden">
          <video
            className="video unleash-video"
            autoPlay
            loop
            muted
            style={{ width: "105%" }}
            playsInline
          >
            <source className="top-0" src={bg} type="video/mp4" />
          </video>
          <div
            className="video-overlay unleash-video-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div data-aos="fade-up" className="d-flex justify-content-center part">
          <h1 className="lines">Unleash Your Creativity</h1>
        </div>
        <div data-aos="fade-up">
          <p
            className="d-flex justify-content-center p-4 opacity-p"
            style={{ maxWidth: 800 }}
          >
            Power of AI-driven matching on Vidbling, where creators like you
            connect with brands that understand and appreciate your creative
            vision.
          </p>
        </div>
        <button
          data-aos="fade-up"
          className="join-btn mt-3"
          onClick={() => navigate("/signup")}
        >
          Join Now
        </button>
      </div>
    </React.Fragment>
  );
};

export default Creativity;
