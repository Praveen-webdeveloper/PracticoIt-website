import React from "react";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <>
      <div className="container my-20">
        <div className="row">
          <div className="col-md-6 pt-3">
            <small className="text-uppercase" style={{ color: "#1abc9c" }}>
              About us
            </small>
            <h1 className="mb-4 fs-1">
              Recruitment company
              <span style={{ color: "#1abc9c" }}>
                {" "}
                work with effectiveness.
              </span>
            </h1>
            <p className="text-secondary-emphasis my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              repellat iure laboriosam cum voluptatum, nam minima deserunt aut?
              Distinctio voluptatibus dolor quaerat quo omnis illo sequi at
              velit, odit quod!
            </p>
            <Link to="/Register">
              <button
                type="button"
                className="btn btn-lg btn-primary my-3"
                style={{ backgroundColor: "#1abc9c" }}
              >
                Register
              </button>
            </Link>
          </div>
          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col-md-6 mb-3">
                <img
                  src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="w-100 rounded"
                  alt=""
                />
              </div>
              <div className="col-md-6 mb-3">
                <img
                  src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="w-100 rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
