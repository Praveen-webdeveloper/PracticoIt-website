import "../App.css";
import HeroSection from "../components/HeroSection";
import PerformanceCounter from "../components/PerformanceCounter";
import AboutSection from "../components/AboutSection";
import WhatWeDo from "../components/WhatWeDo";
import FAQs from "../components/FAQs";
import ClientTestimonial from "../components/ClientTestimonial";
import BlogSection from "../components/BlogSection";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PerformanceCounter />
      <WhatWeDo />
      <FAQs />
      <ClientTestimonial />
      <BlogSection />
    </>
  );
}

export default Home;
