import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import car from "../Components/images/dhoom.jpg";
import cartwo from "../Components/images/dhoom machale.jpg";
import audi from "../Components/images/audi.jpeg";
import landrover from "../Components/images/landrover.jpeg";
import harrier from "../Components/images/harrier.jpg";
import buggati from "../Components/images/buggati.webp";

const NewDash = () => {
  const [img, setImg] = useState(car);
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
    });
  });
  return (
    <div data-aos="fade-in" className="dash-container">
      <div className="dash-top">
        <img className="dash-img" src={img} alt="" />
      </div>
      <div className="dash-bottom">
        <h1>HOW WE CREATE</h1>
        <div className="dash-buttons">
          <button className="One" onClick={(e) => setImg(cartwo)}>
            DISCOVER
          </button>
          <button className="Two" onClick={(e) => setImg(landrover)}>
            STRATEZIZE
          </button>
          <button className="Three" onClick={(e) => setImg(audi)}>
            CREATE
          </button>
          <button className="Four" onClick={(e) => setImg(harrier)}>
            FEEDBACK
          </button>
          <button className="Five" onClick={(e) => setImg(buggati)}>
            GROWTH
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDash;
