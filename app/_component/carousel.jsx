"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const setting = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 1,
  arrows: false,

};

const Carousel = () => {
  return (
    <div className="relative">
    <section className=" relative content bg-white lg:h-full min-[320px]:h-56 min-[768px]:h-72 ">
      <section className="relative content bg-white ">
        <Slider {...setting}>
          <div className="relative">
            <img
              src="/dasboard.png"
              alt="blowing"
              className="object-cover w-full "
            />
          </div>
          <div className="relative">
            <img
              src="/dasboard.png"
              alt="buronan"
              className="object-cover w-full "
            />
          </div>
          <div className="relative">
            <img
              src="/dasboard.png"
              alt="cms"
              className="object-cover w-full"
            />
          </div>
        </Slider>
      </section>
    </section>
    </div>
  );
};

export default Carousel;
