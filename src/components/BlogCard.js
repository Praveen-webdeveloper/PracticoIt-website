import React from "react";

function BlogCard(props) {
  const BlogImg = {
    objectFit: "cover",
    backgroundImage: `url(${props.imgUrl})`,
  };

  return (
    <>
      <div className="BlogCard my-5 mx-3 ">
        <div className="BlogCard-header" style={BlogImg}></div>
        <div className="BlogCard-body">
          <h2 className="mt-5">Heading Title</h2>
          <p className="my-1" style={{ color: "#1abc9c" }}>
            22 Nov 2024
          </p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore Lorem
          ipsum dolor sit amet,
        </div>
      </div>
    </>
  );
}

export default BlogCard;
