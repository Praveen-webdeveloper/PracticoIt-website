import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-0 py-2">
        <div className="container-fluid container-xl">
          <NavLink to="/" className="navbar-logo fs-4">
            {/* <i className="fab fa-typo3"></i> */}
            {/* PRACTICOIT */}
            <img src={logo} alt="" className="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2  mx-lg-auto">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Blogs">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink className="nav-item nav-link fs-6" to="/SignIn">
              Sign In
            </NavLink>
            <NavLink className="nav-link" to="/Register">
              <button
                type="button"
                className="btn btn-sm btn-primary w-full w-lg-auto"
                style={{ backgroundColor: "#1abc9c" }}
              >
                Register
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
