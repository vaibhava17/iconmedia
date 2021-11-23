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
// import Audio from "./Components/Audio";
// import HeadingContent from "./Components/HeadingContent";
// import HeadingParagraph from "./Components/HeadingParagraph";
// import Profile from "./Components/Profile";
// import Testimonial from "./Components/Testimonial";
// import Dashboard from "./Components/Dashboard";
// import NewDash2 from "./Components/NewDash2";
// import Imageslider from "./Components/ImageSlider";
// import FirstPage from "./Components/FirstPage";
// import Contact from "./Components/Contact";
// import ThreeSixty from "./Components/360";


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
            <Footer />
          </Route>
          {/* <Route exact path="/about">
            <FirstPage />
            <Brands />
            <Footer />
          </Route>
          <Route
            exact
            path="/gallery"
            component={
              <div className="fluid-container mb-3">
                <SliderGallery />
                <SliderGalleryReverse />
                <Footer className="mt-3" />
              </div>
            }
          ></Route>
          <Route exact path="/get-in-touch">
            <Contact />
          </Route> */}
          <Route exact path="/test">
            {/* <FAQ />
            <ThreeSixty /> */}
          </Route>
        </Switch>
        {/* <Audio /> */}
      </Router>
    </>
  );
};

export default App;
