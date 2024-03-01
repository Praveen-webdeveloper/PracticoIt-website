import React from "react";
import "./WhatWeDo.css";

function WhatWeDo() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center container my-20">
        <div className="d-flex flex-column align-items-center justify-content-center ">
          <p style={{ color: "#1abc9c" }} className="">
            What we do
          </p>
          <h1 className="my-4 mx-10  text-center ">
            Building Digital Futures with{" "}
            <span style={{ color: "#1abc9c" }}> Web Development,</span>
            and
            <span style={{ color: "#1abc9c" }}> Internship Opportunities</span>
          </h1>
        </div>

        <div
          className="row row-cols-1 row-cols-md-2 g-5 my-8"
          style={{ width: "90vw" }}
        >
          <div className="col">
            <div className="card rounded-1 " id="doCards">
              <img
                src="https://source.unsplash.com/nPnIOAM8pbo/200x200&auto=format&fit=crop&&q=50"
                className="card-img rounded-1"
                alt="..."
                style={{ height: "60vh" }}
              />
              <div className="card-img-overlay card-overlay" id="card-overlay1">
                <h5 className="card-title">Web Development</h5>
              </div>
              <div className="card-img-overlay card-overlay" id="card-overlay2">
                <div id="card-title-after">
                  <h5 className="card-title">Web Development</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card rounded-1 " id="doCards">
              <img
                src="https://source.unsplash.com/FlPc9_VocJ4/200x200&auto=format&fit=crop&&q=50"
                className="card-img rounded-1"
                alt="..."
                style={{ height: "60vh" }}
              />
              <div className="card-img-overlay card-overlay" id="card-overlay1">
                <h5 className="card-title">Internship program</h5>
              </div>
              <div className="card-img-overlay card-overlay" id="card-overlay2">
                <div id="card-title-after">
                  <h5 className="card-title">Internship program</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
