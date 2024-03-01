import React from "react";
import "./PerformanceCounter.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className="position-relative w-100" id="hero-img">
        <div
          className="position-absolute text-white d-flex flex-column align-items-start justify-content-center"
          id="hero-container"
        >
          <div className="container">
            <div className="col-md-6">
              <span style={{ color: "bbb" }} className="text-uppercase">
                SubHeadline
              </span>
              <h1 className="mb-4 mt-2 display-4 font-weight-bold text-light">
                We Understand{" "}
                <span
                  style={{
                    color: "#1abc9c",
                    textShadow:
                      "1px 1px #fff, -1px  1px #fff,1px -1px #fff,-1px -1px #fff, 1px  1px 5px #555",
                  }}
                >
                  Your Need Better
                </span>
              </h1>
              <p style={{ color: "lightgrey" }}>
                Adipisicing amet consectetur elit voluptatem eos ea, cum quae
                facilis optio impedit tempora aliquam at eveniet lorem ipsum
                dolor sit?
              </p>
              <div className="mt-5">
                <Link
                  to="/"
                  className="btn px-5 py-3 text-white mt-3 mt-sm-0"
                  style={{ borderRadius: "30px", backgroundColor: "#1abc9c" }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
