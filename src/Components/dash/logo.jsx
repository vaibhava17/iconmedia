import React from "react";

import one from "../../Components/images/gallary/1.jpg";
import two from  "../../Components/images/gallary/2.jpg";
import three from  "../../Components/images/gallary/3.jpg";
import four from  "../../Components/images/gallary/4.jpg";
import five from  "../../Components/images/gallary/5.jpg";
import six from  "../../Components/images/gallary/6.jpg";

function Logo() {
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

export default Logo;
