import React, { useEffect } from "react";
import robo from "./images/Robo-1.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const Heading = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 3000,
      delay: 100,
    });
  });
  return (
    <>
      <div data-aos="fade-up" className="robo-set-1">
        <div className="luxury-heading">
          <div data-aos="fade-left" className="luxury">
            Luxury<span>of</span>
          </div>
          <div data-aos="fade-right" className="design">
            Design
          </div>
        </div>
        <img src={robo} alt="robo" className="robo" />
      </div>
    </>
  );
};

export default Heading;
