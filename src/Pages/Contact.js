import React from "react";
import HeroSection2 from "../components/HeroSection2";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <HeroSection2
        pageTitle="Contact"
        pageSubtitle="Feel free to keep in touch"
      />
      <ContactForm />
    </>
  );
}

export default Contact;
