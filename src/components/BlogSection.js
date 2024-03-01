import React from "react";
import "./BlogSection.css"; // Add CSS for custom styling
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import BlogCard from "./BlogCard";

function BlogSection() {
  return (
    <>
      <h1 className=" fs-1 text-center">
        Our
        <span style={{ color: "#1abc9c" }}> Blogs</span>
      </h1>
      <Swiper
        spaceBetween={30}
        loop={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper mt-10 mb-20"
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          576: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <BlogCard imgUrl="https://unsplash.it/320/240?image=0" />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard imgUrl="https://unsplash.it/320/240?image=7" />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard imgUrl="https://unsplash.it/320/240?image=8" />
        </SwiperSlide>
        <SwiperSlide>
          <BlogCard imgUrl="https://unsplash.it/320/240?image=8" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default BlogSection;
