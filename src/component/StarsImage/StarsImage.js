import React from "react";
import image1 from "../../assets/Images/img1.png";
import image2 from "../../assets/Images/img2.png";
import image3 from "../../assets/Images/img3.png";
import image4 from "../../assets/Images/img4.png";
import image5 from "../../assets/Images/img5.png";
import image6 from "../../assets/Images/img6.png";
import image7 from "../../assets/Images/img7.png";
import image8 from "../../assets/Images/img8.png";
import tiktok from "../../assets/Images/tiktok-icon.svg";
import "./StarsImage.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const starList = [
    { img1: image1, followers: "1.5m", name: "@Oliver Johnson" },
    { img1: image2, followers: "10.5m", name: "@Robert criss" },
    { img1: image3, followers: "550k", name: "@Charlie Adams" },
    { img1: image4, followers: "2.5m", name: "@Charlotte Clark" },
    { img1: image5, followers: "130k", name: "@Mia Anderson" },
    { img1: image6, followers: "2.0m", name: "@Alex Carter" },
    { img1: image7, followers: "130k", name: "@Ethan Mitchell" },
    { img1: image8, followers: "1.5m", name: "@Olivia Lee" },
  ];
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    // {starList.map((val, index) => {
    //   return (
    //     <div className="img-div mx-3 text-center ">
    //       <img src={val.img1} alt="" />
    //       <span>{val.name}</span>
    //       <h6 className="d-flex justify-content-center mt-2">
    //         {val.followers} <img src={tiktok} />
    //       </h6>
    //     </div>
    //   );
    // })}
    <Slider {...settings} className="mt-5 pt-5">
      {starList.map((val, index) => {
        return (
          <div className="img-div mx-3 text-center mt-4 d-flex flex-column justify-content-center align-items-center">
            <img src={val.img1} alt="" className="img-fluid" />
            <span>{val.name}</span>
            <h6 className="d-flex justify-content-center mt-2">
              {val.followers} <img src={tiktok} />
            </h6>
          </div>
        );
      })}
    </Slider>
  );
}
