import React from "react";
import zara from "../../assets/Images/zara.svg";
import esprit from "../../assets/Images/esprit.svg";
import mango from "../../assets/Images/mango.svg";
import target from "../../assets/Images/target.svg";
import jockey from "../../assets/Images/jockey.svg";
import marks from "../../assets/Images/marks.svg";
import "./Branding.scss";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";

const Branding = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="marquee-div">
      {/* <Swiper
        modules={[Navigation, Autoplay]}
        // spaceBetween={25}
        loop={true}
        slidesPerView="auto"
        speed={1000}
        autoplay={{
          delay: 0,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      > */}
      <Marquee speed={250}>
        <div>
          <img src={zara} />
        </div>
        <div>
          <img src={esprit} />
        </div>
        <div>
          <img src={mango} />
        </div>
        <div>
          <img src={target} />
        </div>
        <div>
          <img src={jockey} />
        </div>
        <div>
          <img src={marks} />
        </div>
        <div>
          <img src={zara} />
        </div>
        <div>
          <img src={esprit} />
        </div>
        <div>
          <img src={mango} />
        </div>
        <div>
          <img src={target} />
        </div>
        <div>
          <img src={jockey} />
        </div>
        <div>
          <img src={marks} />
        </div>
      </Marquee>
      {/* <div
          ref={navigationNextRef}
          className={"swiper-button-next text-3xl"}
        />
        <div ref={navigationPrevRef} className={"swiper-button-prev"} /> */}
      {/* </Swiper> */}
    </div>
  );
};

export default Branding;
