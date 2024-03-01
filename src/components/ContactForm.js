import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // State to track typing status
  let timer; // Timer to delay shaking effect

  const handleChange = (e) => {
    const { name, value } = e.target;
    let isValid = true;

    // Validation for email field
    if (name === "email") {
      isValid = /\S+@\S+\.\S+/.test(value);
    }

    // Validation for phone field
    if (name === "phone") {
      isValid = /^\d{10}$/.test(value); // Adjusted regex for 10-digit phone number
    }

    // Update form data
    setFormData({ ...formData, [name]: value });

    // Clear shaking effect when typing starts
    const inputElement = e.target;
    inputElement.classList.remove("shaky");

    // Set typing status to true
    setIsTyping(true);

    // Clear previous timer
    clearTimeout(timer);

    // Start a new timer to set typing status to false after 500ms
    timer = setTimeout(() => {
      setIsTyping(false);
    }, 500);

    // Apply shaking effect if not valid and not typing
    if (!isValid && !isTyping) {
      inputElement.classList.add("invalid");
      inputElement.classList.add("shaky");
    } else {
      inputElement.classList.remove("invalid");
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Set typing status to false
    setIsTyping(false);

    // Apply shaking effect if not valid and field is blurred
    const inputElement = e.target;
    let isValid = true;

    // Validation for email field
    if (name === "email") {
      isValid = /\S+@\S+\.\S+/.test(value);
    }

    // Validation for phone field
    if (name === "phone") {
      isValid = /^\d{10}$/.test(value); // Adjusted regex for 10-digit phone number
    }

    if (!isValid) {
      inputElement.classList.add("invalid");
      // Apply shaking effect if not valid and not typing
      if (!isTyping) {
        inputElement.classList.add("shaky");
      }
    } else {
      inputElement.classList.remove("invalid");
      inputElement.classList.remove("shaky");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    if (
      formData.name.trim() === "" ||
      formData.email.trim() === "" ||
      formData.message.trim() === ""
    ) {
      setShowAlert(true);
      // Highlight important fields in red
      document.querySelectorAll(".important-field").forEach((element) => {
        element.classList.add("invalid");
      });
      return;
    } else {
      // Remove red highlighting from important fields
      document.querySelectorAll(".important-field").forEach((element) => {
        element.classList.remove("invalid");
      });
    }
    // Here you can send the form data securely to your backend for processing
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setShowAlert(false);
  };

  return (
    <div className="ContactContainer">
      {/*    */}
      {/* <img src="img/shape.png" className="square" alt="" /> */}
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i>
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i> <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i> <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="./">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="./">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="./">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="./">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form onSubmit={handleSubmit} autoComplete="off">
            <h3 className="title">Contact us</h3>

            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input important-field"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input important-field"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input important-field"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
            </div>
            {showAlert && (
              <div
                className="alert alert-danger alert-dismissible fade show my-5"
                role="alert"
              >
                Please fill in all required fields
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
            )}
            <input type="submit" value="Send" className="ContactBtn btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
