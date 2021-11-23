import React from "react";
import homeLogo from "./images/ICONMEDIA.gif";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container nav-pad">
            <Link to="/" className="navbar-brand">
              <img
                className="text-white"
                width="150px"
                height="50px"
                src={homeLogo}
                alt="main_logo"
              />
            </Link>
            <button
              className="navbar-toggler text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon text-white font-warning"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end text-center"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav text-white">
                <li className="nav-item">
                  <Link
                    to="/about"
                    className=" nav-text navbar-img nav-link text-white mt-2"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/gallery"
                    className="nav-text navbar-img nav-link text-white mt-2"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/get-in-touch" className="nav-link">
                    <button className="nav-text navbar-img btn btn-outline-warning">
                      Get In Touch
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Router>
    </>
  );
};

export default Navbar;
