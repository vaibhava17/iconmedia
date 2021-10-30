import React from "react";

const SliderGallery = () => {
  return (
    <>
      <div className="">
        <div class="slider">
          <div class="slide-track">
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
            <div class="slide"></div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .slider {
            background-color: #2b0505;
           
          }
          .slide {
            margin-left: 10px;
            margin-right: 10px;
            border-radius: 20px;
          }
        `}
      </style>
    </>
  );
};

export default SliderGallery;
