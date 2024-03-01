import React from "react";

function HeroSection2(props) {
  return (
    <>
      <div className="position-relative w-100" id="hero-img2">
        <div>
          <span className="big-circle"></span>
          <span className="square"></span>
          <span className="square square2"></span>
        </div>
        <div
          className="position-absolute text-white d-flex  align-items-center text-center"
          id="hero-container2"
        >
          <div className="container">
            <h1 className="mb-4 mt-2 display-4 font-weight-bold text-light">
              {props.pageTitle}
            </h1>
            <h2 className="text-white">{props.pageSubtitle}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection2;
