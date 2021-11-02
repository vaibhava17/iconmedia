import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import MainCard from "./Components/MainCard";
import SliderGallery from "./Components/SliderGallery";
import SliderGalleryReverse from "./Components/SliderGalleryReverse";
import "animate.css";

const App = () => {
  return (
    <>      
      <MainCard />
      <SliderGallery />
      <SliderGalleryReverse />
    </>
  );
};

export default App;
