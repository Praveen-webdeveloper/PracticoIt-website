import React from "react";
import HeroSection2 from "../components/HeroSection2";
import AboutSection from "../components/AboutSection";
import PerformanceCounter from "../components/PerformanceCounter";
import ClientTestimonial from "../components/ClientTestimonial";

function About() {
  return (
    <>
      <HeroSection2
        pageTitle="About"
        pageSubtitle="It turns to the pathway for both employer and employe
"
      />
      <AboutSection />
      <PerformanceCounter />
      <ClientTestimonial />
    </>
  );
}

export default About;
