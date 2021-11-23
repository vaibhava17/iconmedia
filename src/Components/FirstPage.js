import React, { useEffect } from "react";
import twelve from "./images/twelve.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const FirstPage = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 3000,
      easing: "ease-in",
      delay: 200,
    });
  });
  return (
    <>
      <div
        data-aos="fade-up"
        className="container-fluid my-lg-5 py-lg-5 top-mrgn fp"
      >
        <div className="row mt-lg-5 pt-lg-5">
          <div className="col-md-10 mx-auto">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6 col-12 order-lg-1 order-2 first_div">
                <p
                  data-aos="fade-left"
                  className="firstpage heading_Para animate__animated animate__backInDown"
                >
                  What we do ?
                </p>
                <h1
                  data-aos="fade-right"
                  className="firstpage heading_Content animate__animated animate__backInUp"
                >
                  Do you need help with <br />
                  your graphic design ?
                </h1>
                <button className="firstpage-bt btn btn-outline-warning px-3 mt-3 animate__animated animate__pulse animate__delay-2s animate__slower animate__infinite">
                  Get in Touch
                </button>
              </div>
              <div className="col-md-6 col-12 order-lg-2 order-1 mx-auto">
                <img
                  className="img-fluid container-img mx-auto"
                  src={twelve}
                  alt="main_img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          
        `}
      </style>
    </>
  );
};

export default FirstPage;
