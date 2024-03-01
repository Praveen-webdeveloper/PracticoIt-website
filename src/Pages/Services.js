import React from "react";
import "../App.css";
import HeroSection2 from "../components/HeroSection2";
import AboutSection from "../components/AboutSection";
import WhatWeDo from "../components/WhatWeDo";
import FAQs from "../components/FAQs";

function Services() {
  return (
    <>
      <HeroSection2
        pageTitle="Services"
        pageSubtitle="Bridge for industrial and corporate development"
      />
      <AboutSection />
      <WhatWeDo />
      <FAQs />
    </>
  );
}

export default Services;
