import React from "react";
import Cards from "./Cards";
import ThreeCards from "./ThreeCards";
import video1 from "./Video/v1.mp4";
import can from "./images/can.jpg";
import video2 from "./Video/v2.mp4";
import jam from "./images/jam.jpg";
import video3 from "./Video/v3.mp4";
import six from "./images/six.jpg";
import three from "./images/three.jpg";
import builder from "./images/builder.jpg";
import chinese from "./images/chinese.jpg";
import run from "./images/run.jpg";
import girl from "./images/girl.jpg";
import drinks from "./images/drinks.jpg";
import watch from "./images/watch.jpg";
import greeting from "./images/greeting.jpg";
import swag from "./images/swag.jpg";
import uniqe from "./images/uniqe.jpg";
import uniqe2 from "./images/uniqe2.jpg";
import honey from "./images/honey.jpg";
import wonder from "./images/wonder.jpg";

let fCard = {
  first: {
    first: girl,
    second: run,
    third: video1,
    fourth: can,
  },
  second: {
    first: honey,
    second: video2,
    third: drinks,
  },
  third: {
    first: chinese,
    second: video3,
    third: jam,
  },
  fourth: {
    first: wonder,
    second: video2,
    third: swag,
  },
  fifth: {
    first: builder,
    second: greeting,
    third: video3,
    fourth: watch,
  },
};

const MainCard = () => {
  return (
    <>
      <div class="container-fluid w-70 d-flex align-items-center justify-content-between flex-wrap main_card_flex pb-lg-2">
        <ThreeCards
          // style={{ borderRadius: "5px" }}
          src={fCard.first}
          class="d-flex flex-column first_card small-screen col-2 mx-auto"
        />
        <Cards
          src={fCard.second}
          class="d-flex-c flex-column second_card small-screen1 col-2 mx-auto hidecard"
          // style={{ borderRadius: "5px" }}
        />
        <Cards
          src={fCard.third}
          class="d-flex-c flex-column third_card small-screen2 col-2 mx-auto hidecard"
        />
        <Cards
          src={fCard.fourth}
          class="d-flex-c flex-column second_card small-screen3 col-2 mx-auto hidecard"
        />
        <ThreeCards
          src={fCard.fifth}
          class="d-flex flex-column first_card small-screen col-2 mx-auto"
        />
      </div>
    </>
  );
};

export default MainCard;
