import React from "react";
import "./ClientTestimonial.css";

function ClientTestimonial() {
  return (
    <section className="client pt-20 pb-5 my-20">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h1 className="display-3 fw-bold text-white">Testimonials</h1>
            <hr
              className="bg-white mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "100px", height: "3px" }}
            />
            <p className="p-text text-white">What our clients are saying</p>
          </div>
        </div>
        <div className="row align-items-md-center">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row p-4">
                    <div className="t-card">
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                      <p className="lh-lg">
                        Lorem Ipsum ist ein einfacher Lorem Ipsum ist in der
                        Industrie bereits der iste natus error sit voluptatem
                        accusantium totam rem aperiam, eaque ipsa quae ab illo
                        architecto beatae vitae dicta sunt explicabo.
                      </p>
                      <i className="fa fa-quote-right" aria-hidden="true"></i>
                      <br />
                    </div>
                    <div className="col-sm-2 pt-3">
                      <img
                        src="https://source.unsplash.com/d1UPkiFd04A/&auto=format&fit=crop&q=50"
                        className="rounded-circle img-responsive img-fluid client-img"
                        alt="client-img"
                      />
                    </div>
                    <div className="col-sm-10 text-white">
                      <div className="arrow-down d-none d-lg-block "></div>
                      <h4>
                        <strong>Jack Mathews</strong>
                      </h4>
                      <p className="testimonial_subtitle">
                        <span>Global Brand manager</span>
                        <br />
                        <span>Artc Cafe</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Add more carousel items here */}
              </div>
              <div className="controls push-right">
                <a
                  className="left fa fa-chevron-left btn btn-outline-light"
                  href="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="right fa fa-chevron-right btn btn-outline-light"
                  href="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span className="visually-hidden">Previous</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientTestimonial;
