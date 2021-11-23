import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Design = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
    });
  });
  return (
    <div data-aos="fade-right" className="D-container">
      <div className="D-left"></div>
      <div className="D-right">
        <h1>great design</h1>
        <h3>get you noticed.</h3>
        <h1>it's that simple</h1>
      </div>
    </div>
  );
};

export default Design;
