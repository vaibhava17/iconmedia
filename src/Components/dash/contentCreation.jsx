import React from "react";

import one from "../../Components/images/gallary/13.jpg";
import two from  "../../Components/images/gallary/14.jpg";
import three from  "../../Components/images/gallary/15.jpg";
import four from  "../../Components/images/gallary/16.jpg";
import five from  "../../Components/images/gallary/17.jpg";
import six from  "../../Components/images/gallary/18.jpg";

function ContentCreation() {
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

export default ContentCreation;
