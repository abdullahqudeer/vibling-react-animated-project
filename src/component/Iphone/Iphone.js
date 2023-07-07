import React from "react";
import iphone from "../../assets/Images/iphone.png";
import iphone1 from "../../assets/Images/iphone1.png";
import iphone2 from "../../assets/Images/iphone2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import video1 from "../../assets/videos/sample-video.mp4";
import "./Iphone.scss";
import subscription1 from "../../assets/Images/subscription1.png";
import subscription2 from "../../assets/Images/subscription2.png";
import subscription3 from "../../assets/Images/subscription3.png";
import subscription4 from "../../assets/Images/subscription4.png";
import subscription5 from "../../assets/Images/subscription5.png";

const Iphone = () => {
  // const navigationPrevRef = React.useRef(null);
  // const navigationNextRef = React.useRef(null);

  return (
    <div>
      <div className=" mt-7 phone-main-div row justify-content-between">
        <div className=" col-5 ">
          <div className="d-flex">
            <div className=" col-xl-4 col-md-5 col-8 d-flex  pe-xxl-4 px-sm-3 px-2 justify-content-end flex-column">
              <img src={subscription4} alt="subscription" />
              <p className="mb-sm-2 mb-1 photo-content">Robert Chris</p>
              <h4 className="photo-price">$800</h4>
            </div>
            <div className=" col-xl-4 col-5 d-md-flex d-none  pe-xxl-4 px-sm-3 px-2 justify-content-end flex-column">
              <img src={subscription1} alt="subscription" />
              <p className="mb-sm-2 mb-1 photo-content">Wilson buks</p>
              <h4 className="photo-price">$560</h4>
            </div>
            <div className=" col-4 d-xl-flex d-none pe-xxl-4 px-sm-3 px-2  justify-content-end flex-column">
              <img src={subscription3} alt="subscription" />
              <p className="mb-sm-2 mb-1 photo-content">Oliver Johnson</p>
              <h4 className="photo-price">$423</h4>
            </div>
          </div>
        </div>

        {/* </div> */}
        <div className="col-2 p-4 iphone d-flex justify-content-center ">
          <div className="align-self-center  phone-pic1">
            <video className="video" autoPlay loop muted playsInline>
              <source
                className="top-0"
                style={{
                  marginTop: 13,
                  borderRadius: 22,
                }}
                src={video1}
                type="video/mp4"
              />
            </video>
          </div>
          <div className="align-self-center phone-pic">
            <img src={iphone} alt="img" className="top-0 px-3 img" />
          </div>
          <div className="align-self-center back-div ms-0 px-2 px-sm-0">
            <div className="img-content">
              <div className=" form-check p-0 mx-lg-2 ">
                <p className="mb-0 font-14 mb-2">Charlotte Clark</p>
                <h4
                  className="mb-0 font-14 fw-semibold pb-lg-2"
                  // style={{ fontSize: 24 }}
                >
                  $620
                </h4>
                <p className="mb-0 font-14">Maximum Payout</p>
                <div className="main-tab mt-2">
                  <div className="tabs d-flex position-relative">
                    <input
                      type="radio"
                      id="radio-1"
                      name="tabs1"
                      checked
                      value="cm"
                      // onChange={(e) => setHeightUnit(e.target.value)}
                    />
                    <label
                      className="tab fw-semibold d-flex justify-content-center align-items-center"
                      for="radio-1"
                    >
                      Subscribe
                    </label>
                    <input
                      type="radio"
                      id="radio-2"
                      name="tabs1"
                      value="ft"
                      // onChange={(e) => setHeightUnit(e.target.value)}
                    />
                    <label
                      className="tab d-flex justify-content-center align-items-center fw-semibold"
                      for="radio-2"
                    >
                      Offer
                    </label>
                    <span className="glider"></span>
                  </div>
                </div>
                <p
                  className="text-center mt-sm-2 mt-1 mb-1 fw-semibold"
                  style={{ fontSize: 12 }}
                >
                  EARNINGS
                </p>
                <div
                  className="progress mt-lg-2 mb-lg-3 mb-1 mx-1"
                  role="progressbar"
                  aria-label="Example 5px high"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: 5 }}
                >
                  <div className="progress-bar" style={{ width: "45%" }}>
                    {/* 25% */}
                  </div>
                </div>
                <button className="subscription mb-2">Subscription</button>
              </div>
            </div>
          </div>
        </div>
        {/* <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={25}
        slidesPerView={7}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
        {/* <div className="d-flex justify-content-between"> */}
        <div className=" col-5 ">
          <div className="d-flex">
            <div className="d-xl-none d-flex col-md-2 col-4"></div>
            <div className="col-xl-4 col-md-5 col-8 d-flex  ps-xxl-4 px-sm-3 px-2 justify-content-end flex-column">
              <img src={iphone2} alt="subscription" />
              <p className="mb-sm-2 mb-1 photo-content">Ava Roberts</p>
              <h4 className="photo-price">$355</h4>
            </div>
            <div className="col-xl-4 col-5 d-md-flex d-none   ps-xxl-4 px-sm-3 px-2 justify-content-end flex-column">
              <img src={subscription2} alt="subscription" />
              <p className="mb-sm-2 mb-1 photo-content">Alexander Davis</p>
              <h4 className="photo-price">$800</h4>
            </div>
            <div className="col-4 d-xl-flex d-none ps-xxl-4 px-sm-3 px-2 justify-content-end flex-column">
              <img src={subscription5} alt="subscription" />
              <p className="mb-sm-2 mb-1 photo-content">Oliver Johnson</p>
              <h4 className="photo-price">$650</h4>
            </div>
          </div>
        </div>
        {/* <div className="col-1"></div> */}

        {/* </div> */}
        {/* <div>
        <img src={iphone2} />
        <p>Ava Roberts</p>
        <h4>$800</h4>
      </div>
      <div>
        <img src={iphone2} />
        <p>Ava Roberts</p>
        <h4>$800</h4>
      </div>
      <div>
        <img src={iphone2} />
        <p>Ava Roberts</p>
        <h4>$800</h4>
      </div>
      <div>
        <img src={iphone2} />
        <p>Ava Roberts</p>
        <h4>$800</h4>
      </div>
      <div>
        <img src={iphone2} />
        <p>Ava Roberts</p>
        <h4>$800</h4>
      </div>
      <div>
        <img src={iphone2} />
        <p>Ava Roberts</p>
        <h4>$800</h4>
      </div> */}
        {/* <div
          ref={navigationNextRef}
          className={"swiper-button-next text-3xl"}
        />
        <div ref={navigationPrevRef} className={"swiper-button-prev"} /> */}
        {/* </Swiper> */}
      </div>
    </div>
  );
};

export default Iphone;
