import React, { useState, useEffect } from "react";
import Image from "./images/c.png";
import { db } from "../firebase";
import { Modal, ModalFooter } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const Quote = () => {
  const [one, setOpen] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [position, setPosition] = useState();
  const [location, setLocation] = useState();
  const [business, setBusiness] = useState();
  const [work, setWork] = useState();
  const [industry, setIndustry] = useState();
  const [product, setProduct] = useState();
  const [goal, setGoal] = useState();
  const [challenge, setChallenge] = useState();
  const [q1, setQ1] = useState();
  const [q2, setQ2] = useState();
  const [q3, setQ3] = useState();

  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
    });
  });
  const sendEmail = () => {
    emailjs
      .send(
        "service_4n9awhh",

        "template_5vxcjyd",
        {
          email: email,
          name: name,
          position: position,
          location: location,
          business_name: business,
          work: work,
          industry: industry,
          product: product,
          goal: goal,
          challenge: challenge,
          q1: q1,
          q2: q2,
          q3: q3,
        },
        "user_h6Ttnd80UW8eec5uK2xbM"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("quotations")
      .add({
        email: email,
        name: name,
        position: position,
        location: location,
        business_name: business,
        work: work,
        industry: industry,
        product: product,
        goal: goal,
        challenge: challenge,
        q1: q1,
        q2: q2,
        q3: q3,
      })
      .then(() => {
        sendEmail();
        alert("Your quotation has been submitted.");
      })
      .catch((error) => {
        alert(error.message);
      });

    setEmail("");
    setName("");
    setPosition("");
    setLocation("");
    setBusiness("");
    setWork("");
    setIndustry("");
    setProduct("");
    setGoal("");
    setChallenge("");
    setQ1("");
    setQ2("");
    setQ3("");
  };

  return (
    <>
      <div
        data-aos="fade-right"
        className="quote animate__animated animate__bounce animate__delay-3s"
      >
        <h1 className="animate__animated animate__zoomIn animate__infinite animate__slower">
          <span style={{ color: "#FFC857", fontSize: "60px" }}>
            Let's create a measurable
          </span>
          <br />
          impact on your business.
        </h1>
        <button
          onClick={() => setOpen(true)}
          className="quote-button btn btn-outline-warning"
          style={{ fontFamily: "Futura-Medium,sans-serif" }}
        >
          Design a quote
        </button>
        {/* -------------------------------------------One---------------------------------------- */}
        <Modal show={one}>
          <ModalHeader>
            <i
              className="fa fa-times times-cross"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            ></i>
          </ModalHeader>
          <div>
            <center>
              <h1 className="modal-head animate__animated animate__fadeInUp animate__delay-1s">
                Design a quote
              </h1>
              <div>
                <strong>
                  <label>Your Name: </label>
                </strong>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <strong>
                  <label>Your E-Mail:</label>
                </strong>
                <input
                  className="input-field"
                  type="email"
                  placeholder="hi@iconmediahouse.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <strong>
                  <label>What role do you play in your business ?</label>
                </strong>
                <input
                  type="text"
                  className="input-field"
                  placeHolder="Ceo"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
            </center>
          </div>
          <ModalFooter>
            <button
              className="btn-primary"
              onClick={() => {
                setTwo(true);
                setOpen(false);
              }}
            >
              Continue
            </button>
          </ModalFooter>
        </Modal>
        {/* --------------------------------------Two---------------------------------------------- */}
        <Modal show={two}>
          <ModalHeader>
            <i
              className="fa fa-times times-cross"
              onClick={() => setTwo(false)}
              aria-hidden="true"
            ></i>
          </ModalHeader>
          <div>
            <center>
              <h1 className="modal-head animate__animated animate__fadeInUp animate__delay-1s">
                Design a quote
              </h1>
              <div>
                <strong>
                  <label>Business Location 🗺 :</label>
                </strong>
                <input
                  className="input-field"
                  type="text"
                  placeholder="    Toronto, Canada"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <br />
                <strong>
                  <label>Business Name 🚴‍♀️ :</label>
                </strong>
                <input
                  className="input-field"
                  type="text"
                  placeholder="   Emma Jam's"
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                />
                <strong>
                  <label>What role do you play in your business 🏢? </label>
                </strong>
                <input
                  type="text"
                  className="input-field"
                  placeholder="    Web Developement"
                  value={work}
                  onChange={(e) => setWork(e.target.value)}
                />
              </div>
            </center>
          </div>
          <ModalFooter>
            <button
              className="btn-primary link-btn"
              onClick={() => {
                setThree(true);
                setTwo(false);
              }}
            >
              Continue
            </button>
          </ModalFooter>
        </Modal>
        {/* -----------------three-------------------------- */}
        <Modal show={three}>
          <ModalHeader>
            <i
              className="fa fa-times times-cross"
              onClick={() => setThree(false)}
              aria-hidden="true"
            ></i>
          </ModalHeader>
          <div>
            <center>
              <h1 className="modal-head animate__animated animate__fadeInUp animate__delay-1s">
                Design a quote
              </h1>
              <div>
                <strong>
                  <label>What industry is your business in ? </label>
                </strong>
                <input
                  className="input-field"
                  type="text"
                  placeholder="    Website Developement"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
                <strong>
                  <label>What is the brand/product about?</label>
                </strong>
                <input
                  type="text"
                  className="input-field"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                />
                <strong>
                  <label>What is the primary goal of your business?</label>
                </strong>
                <input
                  type="text"
                  className="input-field"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                />
                <strong>
                  <label>What is your biggest challenge?</label>
                </strong>
                <input
                  type="text"
                  className="input-field"
                  value={challenge}
                  onChange={(e) => setChallenge(e.target.value)}
                />
              </div>
            </center>
          </div>
          <ModalFooter>
            <button
              className="btn-primary  link-btn"
              onClick={() => {
                setFour(true);
                setThree(false);
              }}
            >
              Continue
            </button>
          </ModalFooter>
        </Modal>
        {/* --------------------------------------------------Four--------------------------------------- */}
        <Modal show={four}>
          <ModalHeader>
            <i
              className="fa fa-times times-cross"
              onClick={() => setFour(false)}
              aria-hidden="true"
            ></i>
          </ModalHeader>
          <div>
            <center>
              <h1 className="modal-head animate__animated animate__fadeInUp animate__delay-1s">
                Design a quote
              </h1>
              <div>
                <strong>
                  <label>
                    When people interact with your brand, how do we want them to
                    feel?
                  </label>
                </strong>
                <input
                  type="text"
                  className="input-field"
                  value={q1}
                  onChange={(e) => setQ1(e.target.value)}
                />
                <br />
                <strong>
                  <label>Who are some companies that you admire and why?</label>
                </strong>
                <input
                  type="text"
                  className="input-field"
                  value={q2}
                  onChange={(e) => setQ2(e.target.value)}
                />
                <br />
                <strong>
                  <label>Is there anything you would like to add?</label>
                </strong>
                <input
                  type="text"
                  className="input-field"
                  value={q3}
                  onChange={(e) => setQ3(e.target.value)}
                />
              </div>
            </center>
          </div>
          <ModalFooter>
            <button
              id="submit"
              className="submit-btn"
              type="submit"
              value="Send!"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </ModalFooter>
        </Modal>
      </div>
      <style jsx>{`
        @font-face {
          font-family: futuramedium;
          src: url("./fonts/Futura-Medium.ttf");
        }
        @font-face {
          font-family: futurabook;
          src: url("./fonts/Futura-Book.ttf");
          
        }
        .modal-p {
          padding: 10px;
          font-size: 24px;
          text-decoration: none;
          color: #2f3542;
          underline: none;
        }
        .modal-p:hover {
          background: #b2bec3;
        }
        .modal-head {
          // display: flex;
          // text-align: center;
          color: red;
        }
        .modal-link {
          text-decoration: none;
        }
        .cross {
          font-size: 20px;
          color: red;
        }
        .cross:hover {
          background: red;
          color: white;
          padding: 15px;
          border-radius: 50%;
        }
        .quote h1 {
          color: white;
          text-align: center;
          // font-size: 40px;
          font-family: futuramedium;
        }
        .quote {
          height: 500px;
          display: flex;
          // background-image: url(${Image});
          background-image: url("./images/Leaf.jpeg");
          background-size: cover;
          background-position: center;

          flex-direction: column;
          justify-content: center;
        }
        .quote-button {
          // background-color: blue;
          // color: #ffe462;
          color: white;
          padding: 10px;
          margin-top: 20px;
          margin-right: auto;
          margin-left: auto;
          border-radius: 5px;
          border: 2px solid white;
          // font-weight: bold;
          font-family: futurabook;
        }
        .box {
          margin: 0;
          position: absolute;
          top: 70%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
        }
        .btnsize {
          width: 205px;
        }
        .btn-primary {
          color: white;
          background: blue;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-weight: bolder;
        }
        .btn-danger {
          color: white;
          background: red;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-weight: bolder;
        }
        .submit-btn {
          color: white;
          background: #6c5ce7;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-weight: bolder;
        }
        .times-cross {
          display: flex-end;
        }
        .link-name {
          text-decoration: none;
        }
        .link-btn {
          margin: 10px;
        }
        .input-field {
          border: none;
          border-bottom: 2px solid silver;
          outline: none;
          width: maxContent;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .input-field:hover {
          border-bottom: 2px solid #be2edd;
        }
        @media screen and (max-width: 500px) {
          .quote h1 {
            font-size: 35px;
          }
        }
      `}</style>
    </>
  );
};

export default Quote;
