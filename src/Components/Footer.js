import React from "react";
import Logo from "./images/homeLogo.png";



function Footer() {
  return (
    <>
      {/* <div className="bg-dark"> */}

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
      <style jsx>{`
        @font-face {
          font-family: futuramedium;
          src: url("./fonts/futura\ medium\ bt.ttf");
        }
        @font-face {
          font-family: futurabook;
          src: url("./fonts/Futura\ Book.ttf");
        }
        .footer{
          font-family:futuramedium;
        }
        .copy-social-container {
          background-color: #191919;
          height: auto;
        }
        .copy-social {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
          }
        .text-end {
          display: flex;
          align-items: center;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .light {
          height: 300px;
          background-color: #333333;
          padding: 50px;
        }
        .iconText {
          font-size: 12px;
          font-weight: normal;
          border-left: 1px solid #ffe462;
          padding-left: 10px;
        }
        .textYellow {
          font-size: 25px;
          color: #ffe462;
        }
        .txsi {
          font-size: 25px;
        }
        .contact {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .contact ul {
          list-style-type: none;
          width: 200px;
        }
        .contact ul li {
          margin-bottom: 20px;
        }
        .heading {
          border-bottom: 1px solid #ffe462;
          color: #ffe462;
        }
        @media screen and (max-width: 800px) {
          .light {
            height: 500px;
            padding: 20px 20px 20px 20px;
          }
          .contact {
            display: flex;
            flex-direction: column;
          }
          .quickLinks {
            margin-top: 50px;
          }
          .contact ul {
            width: 100%;
            padding: 0;
          }
      `}</style>
      {/* </div> */}
    </>
  );
}

export default Footer;
