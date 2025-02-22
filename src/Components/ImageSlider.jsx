// filepath: /c:/Users/UTS/Downloads/React Projects/E-Commerce/src/Components/ImageSlider.jsx
import React from "react";
import Slider from "react-slick";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const images = [
    "https://hukut.com/_next/image?url=https%3A%2F%2Fcdn.hukut.com%2Feveryday%2520banner_web%2520view%2520-09.jpg1739689153226&w=3840&q=75",
    "https://hukut.com/_next/image?url=https%3A%2F%2Fcdn.hukut.com%2Feveryday%2520banner_web%2520view%2520-08.jpg1739688690115&w=3840&q=75",
    "https://hukut.com/_next/image?url=https%3A%2F%2Fcdn.hukut.com%2Feveryday%2520banner_web%2520view%2520-10.jpg1739688896501&w=3840&q=75",
    "https://hukut.com/_next/image?url=https%3A%2F%2Fcdn.hukut.com%2Ffall-back-banner-for-website-web%2520view.png1733735526759&w=1920&q=75"
  ]
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="flex justify-center overflow-x-hidden">
          <img src={image} alt={`Slide ${index}`} className=" h-auto w-full" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
