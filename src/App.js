import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeadingContent from "./Components/HeadingContent";
import MainCard from "./Components/MainCard";
import FirstPage from "./Components/FirstPage";
import Brands from "./Components/Brands";
import Profile from "./Components/Profile";
import SliderGallery from "./Components/SliderGallery";
import SliderGalleryReverse from "./Components/SliderGalleryReverse";
import Testimonial from "./Components/Testimonial";
import NewDash from "./Components/NewDash";
import Quote from "./Components/Quote";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import "animate.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/iconmedia/">
            <MainCard />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
