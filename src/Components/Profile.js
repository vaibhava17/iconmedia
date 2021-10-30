import React from "react";
import profile1 from "./images/profile1.gif";
import profile2 from "./images/profile2.gif";
import profile3 from "./images/profile3.gif";

const Profile = () => {
  return (
    <>
      <div className="profile-bg text-center ">
        <h1
          className="profile-text profile-heading display-4 animate__animated animate__slideInRight"
          // style={{ fontFamily: "Futura-Medium,sans-serif" }}
        >
          The right team for job!
        </h1>
        <div className="container d-flex justify-content-between align-items-center">
          <div class="profile d-flex justify-content-center align-items-center ">
            <img
              src={profile1}
              className="img-fluid profile-img animate__animated animate__bounce animate__infinite"
              alt="Profile_picture"
            />
            <p className="profile-member profile-para">Team Member</p>
            <p className="profile-member-position profile-para">founder</p>
          </div>
          <div class="profile d-flex justify-content-center align-items-center ">
            <img
              src={profile2}
              className="img-fluid profile-img  animate__animated animate__bounce animate__infinite"
              alt="Profile_picture"
            />
            <p className="profile-member profile-para">Team Member</p>
            <p className="profile-member-position profile-para">designer</p>
          </div>
          <div class="profile d-flex justify-content-center align-items-center ">
            <img
              src={profile3}
              className="img-fluid profile-img animate__animated animate__bounce animate__infinite"
              alt="Profile_picture"
            />
            <p className="profile-member profile-para">Team Member</p>
            <p className="profile-member-position profile-para">animator</p>
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
          .profile-text {
            font-family: futuramedium;
          }
          .profile-para {
            font-family: futurabook;
          }
        `}
      </style>
    </>
  );
};

export default Profile;
