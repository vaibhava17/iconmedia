import React, { useState, useMemo } from "react";
import Select from "react-select";
import { db } from "../firebase";
import countryList from "react-select-country-list";
import emailjs from "emailjs-com";
import Lottie from "react-lottie";
import animationData from "../lotties/email.json";
// import twelve from "./images/twelve.jpg";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [first, setNameFirst] = useState("");
  const [last, setNameLast] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [addClass, setState] = useState("");
  const [comment, setComment] = useState("");
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  console.log(options);
  const changeHandler = (value) => {
    setValue(value);
  };

  // const [loader, setLoader] = useState(false);
  const toggle = (e) => {
    setState({ addClass: !addClass });
  };
  let boxClass = ["js-hiddenform"];
  if (addClass) {
    boxClass.push("js-form");
  }

  const sendEmail = () => {
    emailjs
      .send(
        "service_4n9awhh",

        "template_5vxcjyd",
        {
          email: email,
          first: first,
          last: last,
          country: value,
          company: company,
          number: number,
          comment: comment,
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
    // setLoader(true);
    db.collection("contacts")
      .add({
        Email: email,
        First_Name: first,
        Last_Name: last,
        Country: value,
        Company_Name: company,
        Contact_number: number,
        Comment: comment,
      })
      .then(() => {
        // setLoader(false);
        sendEmail();
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        // setLoader(false);
      });

    setEmail("");
    setNameFirst("");
    setNameLast("");
    setValue("");
    setCompany("");
    setNumber("");
    setComment("");
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <>
      <div className="split">
        <div>
          <h2 className="text-capitalize display-2 w-50 contact-alng headingContent2">
            LET'S CREATE EXPERIENCES!
          </h2>
          {/* <div className="form-container center-block"> */}
          <form id="email-form" className="alng" onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              size="50"
              value={email}
              className="form-field input js-expand"
              onChange={(e) => setEmail(e.target.value)}
              onClick={toggle.bind(this)}
              placeholder="Enter your email address"
            />
            <div className={boxClass.join(" ")}>
              <div className="half-width">
                <label className="label" htmlFor="first">
                  First Name
                </label>
                <input
                  type="text"
                  id="first"
                  size="30"
                  value={first}
                  onChange={(e) => setNameFirst(e.target.value)}
                  required=""
                  className="form-field input"
                  placeholder="First Name"
                />
              </div>
              <div className="half-width">
                <label className="label" htmlFor="last">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last"
                  size="30"
                  value={last}
                  onChange={(e) => setNameLast(e.target.value)}
                  required=""
                  className="form-field input"
                  placeholder="Last Name"
                />
              </div>
              <div className="clear"></div>
              <label className="label" htmlFor="country">
                Country{" "}
              </label>
              <Select
                id="country"
                options={options}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onChange={changeHandler}
                size="1"
                required=""
                className="form-field"
              />
              <div className="half-width">
                <label className="label" htmlFor="company">
                  Price
                </label>
                <input
                  type="text"
                  id="company"
                  size=""
                  required=""
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="form-field input"
                  placeholder="Company Name"
                />
              </div>
              <div className="half-width">
                <label className="label" htmlFor="number">
                  Contact No.
                </label>
                <input
                  type="text"
                  id="number"
                  size=""
                  required=""
                  maxLength="13"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className=" form-field input"
                  placeholder="Contact Number"
                />
              </div>
              <div className="clear"></div>
              <label className="label" htmlFor="comment">
                Comment
              </label>
              <input
                type="text"
                id="comment"
                size=""
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className=" form-field input"
                placeholder="Comment"
              />
            </div>
            <button
              id="submit"
              className="btn btn-outline-warning box"
              type="submit"
              value="Send!"
            >
              Submit
            </button>
          </form>
          {/* </div> */}
        </div>
        <div>
          <div
            className="contact-img"
            style={{
              //   width: `300px`,
              //   height: `300px`,
              display: `flex`,
              flex: `wrap`,
              alignItems: `center`,
              justifyContent: `center`,
            }}
          >
            {/* <img className="img-fluid contact-img mx-auto animate_animated animatepulse animatedelay-2s animateinfinite animate_slower" src={twelve} alt="main_img" /> */}
            <Lottie className="contact-lottie" options={defaultOptions} />
          </div>
        </div>
      </div>
      {/* <style jsx>{` @media screen and (max-width: 800px) { .contact-lottie { flex-direction: "column"; width: "300px"; height: "300px";}}`}</style> */}
    </>
  );
};

export default Contact;
