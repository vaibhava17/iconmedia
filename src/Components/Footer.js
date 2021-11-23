import React, { useEffect } from "react";
import Logo from "./images/homeLogo.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 2000,
    });
  });
  return (
    <>
      <div className=" light text-light">
        <section className="container">
          <div className="contact">
            <table>
              <tr>
                <td>
                  <img src={Logo} style={{ height: "60px" }} alt="icon" />
                </td>
                <td className="iconText footer">
                  We are a team of creatives who are
                  <br />
                  thrilled to create, ignite and succeed your
                  <br />
                  business with all the things digital.
                </td>
              </tr>
              <tr className="footer textYellow">Email</tr>
              <tr className="footer">priya@iconmediahouse.com</tr>
              <tr className="footer textYellow">Contact</tr>
              <tr>+1647-627-2546</tr>
            </table>
            <div className="quickLinks">
              <ul>
                <li className=" footer heading txsi">Quick Links</li>
                <li>About</li>
                <li>Careers</li>
                <li>Make Payment</li>
                <li>Reach Us</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className=" copy-social-container ">
        <div className="footer container copy-social text-light">
          <small>
            {" "}
            &#169; 2021,Icon Media House. Made &#10084; with in Toronto.
          </small>
          <small className="text-end">
            <div>Follow us on:</div>
          </small>
        </div>
      </div>
    </>
  );
}

export default Footer;
