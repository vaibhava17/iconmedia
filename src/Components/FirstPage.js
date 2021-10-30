import React from "react";
import twelve from "./images/twelve.jpg";

const FirstPage = () => {
  return (
    <>
      <div className="container-fluid my-lg-5 py-lg-5 top-mrgn">
        <div className="row mt-lg-5 pt-lg-5">
          <div className="col-md-10 mx-auto">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-6 col-12 order-lg-1 order-2 first_div">
                <p className="firstpage heading_Para animate__animated animate__backInDown">
                  What we do ?
                </p>
                <h1 className="firstpage heading_Content animate__animated animate__backInUp">
                  Do you need help with <br />
                  your graphic design ?
                </h1>
                <button className="firstpage-bt btn btn-outline-warning px-3 mt-3 animate__animated animate__pulse animate__delay-2s animate__slower animate__infinite">
                  Get in Touch
                </button>
              </div>
              <div className="col-md-6 col-12 order-lg-2 order-1 mx-auto">
                <img
                  className="img-fluid container-img mx-auto animate__animated animate__pulse animate__delay-2s animate__infinite animate__slower"
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
          @font-face {
            font-family: futuramedium;
            src: url("./fonts/futura\ medium\ bt.ttf");
          }
          @font-face {
            font-family: futurabook;
            src: url("./fonts/Futura\ Book.ttf");
          }
          .firstpage {
            font-family: futuramedium;
          }
          .firstpage-bt {
            font-family: futurabook;
          }
        `}
      </style>
    </>
  );
};

export default FirstPage;
