import React from "react";
import one from "../Components/images/icons/ads.png";
import two from "../Components/images/icons/app.png";
import three from "../Components/images/icons/content.png";
import four from "../Components/images/icons/graphic.png";
import five from "../Components/images/icons/logo.png";
import six from "../Components/images/icons/motion.png";
import seven from "../Components/images/icons/store.png";
import eight from "../Components/images/icons/web.png";

const Icon = () => {
  return (
    <>
      <div className="icon-section">
          <div className="icon-title">
              <h1>The Icon Advantage</h1>
          </div>
        <div className="iconcard">
            <div className="icon-block">
                <img src={one} alt="icon-1" />
                <h5>We are Visual Storytellers</h5>
            </div>
            <div className="icon-block">
                <img src={two} alt="icon-2" />
                <h5>We solve problems using design</h5>
            </div>
            <div className="icon-block">
                <img src={three} alt="icon-3" />
                <h5>Our work is consistent</h5>
            </div>
            <div className="icon-block">
                <img src={four} alt="icon-4" />
                <h5>Creative & Innovative Marketing Strategies</h5>
            </div>
            <div className="icon-block">
                <img src={five} alt="icon-5" />
                <h5>Full branding customization</h5>
            </div>
            <div className="icon-block">
                <img src={six} alt="icon-6" />
                <h5>High-quality designs</h5>
            </div>
            <div className="icon-block">
                <img src={seven} alt="icon-7" />
                <h5>Transparent communication</h5>
            </div>
            <div className="icon-block">
                <img src={eight} alt="icon-8" />
                <h5>Value for money</h5>
            </div>
        </div>
      </div>
    </>
  );
};

export default Icon;
