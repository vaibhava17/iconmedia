import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DesignTwo = () => {
  useEffect(() => {
    AOS.init({
      offset: 500,
      duration: 2000,
      easing: "ease-in",
    });
  });
  return (
    <div data-aos="fade-in" className="designTwo">
      <p className="designTwo-p">unrivaled</p>
      <h1 className="designTwo-h1">Quality</h1>
    </div>
  );
};

export default DesignTwo;
