import React, { useEffect } from "react";
import Cards from "./Cards";
import ThreeCards from "./ThreeCards";
import one from "./images/main/1.jpg";
import two from "./images/main/2.jpg";
import three from "./images/main/3.jpg";
import four from "./images/main/4.jpg";
import five from "./images/main/5.jpg";
import six from "./images/main/6.jpg";
import seven from "./images/main/7.jpg";
import eight from "./images/main/8.jpg";
import nine from "./images/main/9.jpg";
import ten from "./images/main/10.jpg";
import eleven from "./images/main/11.jpg";
import twelve from "./images/main/12.jpg";
import onev from "./images/main/1.mp4";
import twov from "./images/main/2.mp4";
import threev from "./images/main/3.mp4";
import fourv from "./images/main/4.mp4";
import fivev from "./images/main/5.mp4";
import sixv from "./images/main/6.mp4";
import sevenv from "./images/main/7.mp4";
import eightv from "./images/main/8.mp4";
import ninev from "./images/main/9.mp4";
import tenv from "./images/main/10.mp4";
import elevenv from "./images/main/11.mp4";
import twelvev from "./images/main/12.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

let fCard = {
  first: {
    first: one,
    second: onev,
    third: two,
    fourth: twov,
    fifth: three,
    sixth: threev,
  },
  second: {
    first: four,
    second: fourv,
    third: five,
    fourth: fivev,
  },
  third: {
    first: six,
    second: sixv,
    third: seven,
    fourth: sevenv,
  },
  fourth: {
    first: eight,
    second: eightv,
    third: nine,
    fourth: ninev,
  },
  fifth: {
    first: ten,
    second: tenv,
    third: eleven,
    fourth: elevenv,
    fifth: twelve,
    sixth: twelvev,
  },
};

const MainCard = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 3000,
      easing: "ease-in",
      delay: 50,
    });
  });
  return (
    <>
      <div
        id="cards"
        class="container-fluid w-70 d-flex align-items-center justify-content-between flex-wrap main_card_flex pb-lg-2 "
      >
        <ThreeCards
          src={fCard.first}
          class=" d-flex flex-column first_card small-screen col-2 mx-auto"
        />
        <Cards
          src={fCard.second}
          class="d-flex-c flex-column second_card small-screen1 col-2 mx-auto hidecard"
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
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          src={fCard.fifth}
          class="d-flex flex-column first_card small-screen col-2 mx-auto"
        />
      </div>
    </>
  );
};

export default MainCard;
