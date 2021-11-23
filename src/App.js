import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import "animate.css";

import Navbar from "./Components/Navbar";
import Heading from "./Components/Heading";
import MainCard from "./Components/MainCard";
import MidHeading from "./Components/MidHeading";
import SliderGallery from "./Components/SliderGallery";
import SliderGalleryReverse from "./Components/SliderGalleryReverse";
import Design from "./Components/Design";
import NewDash from "./Components/NewDash";
import DesignTwo from "./Components/DesignTwo";
import Icon from "./Components/Icon";
import Testimonial from "./Components/Testimonial";
import Brands from "./Components/Brands";
import FAQ from "./Components/FAQ";
import Quote from "./Components/Quote";
import Footer from "./Components/Footer";
import FirstPage from "./Components/FirstPage";
import Contact from "./Components/Contact";
import Audio from "./Components/Audio";
// Test
import ThreeSixty from "./Components/360";
// import Profile from "./Components/Profile";
// import Testimonial from "./Components/Testimonial";
// import Imageslider from "./Components/ImageSlider";


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Heading />
            <MainCard data-aos="fade-left" />
            <MidHeading />
            <SliderGallery />
            <SliderGalleryReverse />
            <Design />
            <NewDash />
            <DesignTwo />
            <Icon />
            <Testimonial />
            <Brands />
            <FAQ />
            <Quote />
          </Route>
          <Route exact path="/about">
            <FirstPage />
            <Brands />
          </Route>
          <Route exact path="/gallery">
              <div className="fluid-container">
                <SliderGallery />
                <SliderGalleryReverse />
              </div>
          </Route>
          <Route exact path="/get-in-touch">
            <Contact />
          </Route>
          <Route exact path="/test">
            <ThreeSixty />
          </Route>
        </Switch>
        <Footer />
        <Audio />
      </Router>
    </>
  );
};

export default App;
