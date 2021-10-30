import React from "react";

import one from "../../Components/images/gallary/43.jpg";
import two from  "../../Components/images/gallary/44.jpg";
import three from  "../../Components/images/gallary/45.jpg";
import four from  "../../Components/images/gallary/46.jpg";
import five from  "../../Components/images/gallary/47.jpg";
import six from  "../../Components/images/gallary/48.jpg";

function MobileApp() {
  return (
    <>
      <img
            className="NewDash-img"
            src={one}
            alt=""
            width="250px"
            height="250px"
          />
          <img
            className="NewDash-img"
            src={two}
            alt=""
            width="250px"
            height="250px"
          />
          <img
            className="NewDash-img"
            src={three}
            alt=""
            width="250px"
            height="250px"
          />
          <img
            className="NewDash-img"
            src={four}
            alt=""
            width="250px"
            height="250px"
          />
          <img
            className="NewDash-img"
            src={five}
            alt=""
            width="250px"
            height="250px"
          />
          <img
            className="NewDash-img"
            src={six}
            alt=""
            width="250px"
            height="250px"
          />
      
    </>
  );
}

export default MobileApp;
