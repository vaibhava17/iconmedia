import React, { useState, useMemo } from "react";
import Select from "react-select";
import { db } from "../firebase";
import countryList from "react-select-country-list";
import emailjs from "emailjs-com";
import Lottie from "react-lottie";
import animationData from "../lotties/email.json";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [first, setNameFirst] = useState("");
  const [last, setNameLast] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [comment, setComment] = useState("");
  const [uxui, setUXUI] = useState("");
  const [apps, setApps] = useState("");
  const [web, setWeb] = useState("");
  const [seo, setSEO] = useState("");
  const [smm, setSMM] = useState("");
  const [branding, setBranding] = useState("");
  const [webdesigning, setWebdesigning] = useState("");
  const [photoshop, setPhotoshop] = useState("");
  const [other, setOther] = useState("");
  const [value, setValue] = useState("");
  const [addClass, setState] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  console.log(options);
  const changeHandler = (value) => {
    setValue(value);
  };

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
          services:
            uxui +
            " " +
            apps +
            " " +
            web +
            " " +
            seo +
            " " +
            smm +
            " " +
            branding +
            " " +
            webdesigning +
            " " +
            photoshop +
            " " +
            other,
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
    db.collection("contacts")
      .add({
        Email: email,
        First_Name: first,
        Last_Name: last,
        Country: value,
        Company_Name: company,
        Contact_number: number,
        Comment: comment,
        services:
          uxui +
          apps +
          web +
          seo +
          smm +
          branding +
          webdesigning +
          photoshop +
          other,
      })
      .then(() => {
        sendEmail();
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setEmail("");
    setNameFirst("");
    setNameLast("");
    setValue("");
    setCompany("");
    setNumber("");
    setComment("");
    setUXUI("");
    setApps("");
    setWeb("");
    setSEO("");
    setSMM("");
    setBranding("");
    setWebdesigning("");
    setPhotoshop("");
    setOther("");
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
                onChange={(e) => {
                  setValue(e.target.value);
                  changeHandler();
                }}
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
              <div class="check-btn">
                <div class="form-group chbox">
                  <input
                    type="checkbox"
                    class="ckbox"
                    name="service"
                    id="uxui"
                    value="uiux"
                    onChange={(e) => setUXUI(e.target.value)}
                  />
                  <label for="uxui">UX-UI</label>
                </div>
                <div class="form-group chbox">
                  <input
                    type="checkbox"
                    class="ckbox"
                    name="service"
                    id="apps"
                    value="mobile apps"
                    onChange={(e) => setApps(e.target.value)}
                  />
                  <label for="apps">Mobile Apps</label>
                </div>
                <div class="form-group chbox">
                  <input
                    type="checkbox"
                    class="ckbox"
                    name="service"
                    id="tech"
                    value="web tech"
                    onChange={(e) => setWeb(e.target.value)}
                  />
                  <label for="tech">Web Tech</label>
                </div>
                <div class="form-group chbox">
                  <input
                    type="checkbox"
                    class="ckbox"
                    name="service"
                    id="seo"
                    value="seo"
                    onChange={(e) => setSEO(e.target.value)}
                  />
                  <label for="seo">SEO</label>
                </div>
                <div class="form-group chbox">
                  <input
                    type="checkbox"
                    class="ckbox"
                    name="service"
                    id="smm"
                    value="smm"
                    onChange={(e) => setSMM(e.target.value)}
                  />
                  <label for="smm">SMM</label>
                </div>
                <div class="form-group chbox">
                  <input
                    type="checkbox"
                    class="ckbox"
                    name="service"
                    id="branding"
                    value="branding"
                    onChange={(e) => setBranding(e.target.value)}
                  />
                  <label for="branding">Branding</label>
                </div>
                <div class="form-group chbox">
                  <input
                    type="checkbox"
                    class="ckbox"
                    name="service"
                    id="webdesigning"
                    value="webdesigning"
                    onChange={(e) => setWebdesigning(e.target.value)}
                  />
                  <label for="webdesigning">Web Designing</label>
                </div>
                <div class="form-group chbox">
                  <input
                    type="checkbox"
                    class="ckbox"
                    name="service"
                    id="photoshop"
                    value="photoshop"
                    onChange={(e) => setPhotoshop(e.target.value)}
                  />
                  <label for="photoshop">Photoshop</label>
                </div>
                <div class="form-group chbox">
                  <input
                    type="checkbox"
                    class="ckbox"
                    name="service"
                    id="other"
                    value="other"
                    onChange={(e) => setOther(e.target.value)}
                  />
                  <label for="other">Other</label>
                </div>
              </div>
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
        </div>
        <div>
          <div
            className="contact-img"
            style={{
              display: `flex`,
              flex: `wrap`,
              alignItems: `center`,
              justifyContent: `center`,
            }}
          >
            <Lottie className="contact-lottie" options={defaultOptions} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
