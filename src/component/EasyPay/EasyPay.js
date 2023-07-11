import React, { useEffect, useState } from "react";
import "./EasyPay.scss";
import Aos from "aos";
const EasyPay = () => {
  const [count, setCount] = useState(200000);

  const [count1, setCount1] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount1((prevCount) => (prevCount + 13) % 100);
    }, 300); // Update the count every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedCount = count.toString().padStart(2, "0");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollIncrement = Math.floor(scrollPosition / 30);
      const updatedCount = 200000 + scrollIncrement * 1000;
      setCount(updatedCount);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="money-div">${count}.</div>
        <div style={{ width: 150 }} className="money-div">
          {count1}
        </div>
      </div>
      <div className="easypay-main-div justify-content-center d-flex ">
        <div className="">
          <div className="small-text-div text-center">Doing what you Love.</div>
          <div
            data-aos="fade-right"
            data-aos-delay="700"
            className="d-flex justify-content-end easy-div mt-4"
          >
            <p>Easy</p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="1000"
            style={{ float: "left" }}
            className="d-flex justify-content-start easy-div"
          >
            <p>Pay</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EasyPay;
