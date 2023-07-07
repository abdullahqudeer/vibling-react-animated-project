import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import FeatureCard from "./FeatureCard";
import "./features.scss";
import { featuresData } from "./data";

export default class Features extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1450,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 924,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div>
        <div className="my-5 d-flex justify-content-center align-items-center">
          <h3 className="features">Features</h3>
        </div>
        <div style={{ padding: "30px 0px" }}>
          <Slider {...settings}>
            {featuresData.map((data) => (
              <div className="d-flex justify-content-center align-items-center">
                <FeatureCard
                  heading={data.heading}
                  description={data.description}
                  icon={data.icon}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
