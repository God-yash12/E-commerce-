
import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import data from "./data.jsx";

const Hero = ({ id, image, title, description }) => {
  return (
    <div className="relative min-h-[600px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 sm:overflow-hidden lg:overflow-hidden md:overflow-hidden">
      {/* Background setup */}
      <div className=" hidden sm:block h-[600px] w-[600px] bg-primary/40 absolute -top-1 left-1/2 transform -translate-x-1 -translate-y-1/2 rounded-2xl rotate-45 "></div>
      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
              <h1 
               data-aos="zoom-in"
               data-aos-delay="500"
               data-aos-duration = "800"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                {title}
              </h1>
              <p
              data-aos="zoom-out"
              data-aos-delay="500"
              data-aos-duration = "800" 
              className="text-sm">{description}</p>
              <div>
                <button 
                 data-aos="zoom-in-left"
                 data-aos-delay="600"
                 data-aos-duration = "800"
                className="bg-gradient-to-r from-primary to-secondary rounded-full hover:scale-105 duration-200 text-white py-2 px-4">
                  Order Now
                </button>
              </div>
            </div>
            {/* Image section */}
            <div className="order-1 sm:order-2">
              <div>
                <img
                  data-aos="zoom-in-up"
                  data-aos-delay="600"
                  data-aos-duration = "800"
                  src={image}
                  alt={`Hero ${id}`}
                  className="sm:h-[450px] sm:w-[450px] sm:scale-125 right-1 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {data.map((hero) => (
        <Hero
          key={hero.id}
          id={hero.id}
          image={hero.image}
          title={hero.title}
          description={hero.description}
        />
      ))}
    </Slider>
  );
};

export default HeroCarousel;
