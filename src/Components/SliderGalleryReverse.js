import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SliderGalleryReverse = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 2000,
      easing: "ease-in",
      delay: 200,
    });
  });
  return (
    <>
      <div
        className="slider"
        data-aos="fade-up"
        style={{ position: "relative", top: "-60px" }}
      >
        <div class="slider">
          <div class="slide-track1">
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
            <div class="slide2"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          
        `}
      </style>
    </>
  );
};

export default SliderGalleryReverse;
