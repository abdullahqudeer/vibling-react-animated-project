import React, { useRef } from "react";
import "./Services.scss";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import image1 from "../../assets/Images/bgImage2.png";
import image2 from "../../assets/Images/bgImage1.png";
import image3 from "../../assets/Images/bgImage3.png";
import image4 from "../../assets/Images/bgImage4.png";

const Services = () => {
  const Page = ({ offset, gradient, onClick }) => (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <img src={image1} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <img src={image2} />
      </ParallaxLayer>

      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <img src={image3} />
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <img src={image4} />
      </ParallaxLayer>
    </>
  );
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <React.Fragment>
      <Parallax className="p-container" ref={parallax} pages={3} vertical>
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
      </Parallax>
    </React.Fragment>
  );
};

export default Services;
