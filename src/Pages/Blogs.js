import React from "react";
import BlogCard from "../components/BlogCard";
import HeroSection2 from "../components/HeroSection2";

function Blogs() {
  return (
    <>
      <HeroSection2 pageTitle="Blogs" pageSubtitle="Archives" />
      <div className="d-flex flex-wrap justify-content-center align-items-center my-20">
        <BlogCard imgUrl="https://unsplash.it/320/240?image=0" />
        <BlogCard imgUrl="https://unsplash.it/320/240?image=3" />
        <BlogCard imgUrl="https://unsplash.it/320/240?image=5" />
        <BlogCard imgUrl="https://unsplash.it/320/240?image=24" />
        <BlogCard imgUrl="https://unsplash.it/320/240?image=9" />
        <BlogCard imgUrl="https://unsplash.it/320/240?image=4" />
        <BlogCard imgUrl="https://unsplash.it/320/240?image=7" />
        <BlogCard imgUrl="https://unsplash.it/320/240?image=20" />
        <BlogCard imgUrl="https://unsplash.it/320/240?image=8" />
      </div>
    </>
  );
}

export default Blogs;
