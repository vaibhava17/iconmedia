import React, { useEffect } from "react";
import robo from "./images/robo-2.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const MidHeading = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
      delay: 200,
    });
  });
  return (
    <>
      <div data-aos="fade-up" className="robo-set-2">
        <div className="mid-heading-text">
          <div data-aos="fade-left">
            Designs that <br />
            <label className="mid-heading-span" data-text="make a difference.">
              make a difference.
            </label>
          </div>
        </div>
        <img src={robo} alt="robo" className="robo2" />
      </div>
    </>
  );
};

export default MidHeading;
