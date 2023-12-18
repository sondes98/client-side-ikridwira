import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HouseCard from "./HouseCard";
import jsonData from "../../data.json"; // Import the JSON data

export const HouseCardList = () => {
  const initialHouses = jsonData; // Use the data from jsonData

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease",
  };

  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 390,
      settings: {
        slidesToShow: 1,
        dots: false,
      },
    },
  ];

  return (
    <Slider {...settings} responsive={responsiveSettings} style={{ margin: "50px" }}>
      {initialHouses.map((house) => (
        <div key={house.id}>
          <HouseCard key={house.id} house={house} />
        </div>
      ))}
    </Slider>
  );
};

export default HouseCardList;
