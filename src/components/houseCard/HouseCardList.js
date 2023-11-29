import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HouseCard from "./HouseCard";

export const HouseCardList = () => {
  const initialHouses = [
    { id: 1, price: 500, area: "Area 1", composition: "s+1" },
    { id: 2, price: 3000, area: "Area 2", composition: "s+2" },
    { id: 3, price: 1000, area: "Area 1", composition: "s+1" },
    { id: 4, price: 2514, area: "Area 2", composition: "s+1" },
    { id: 5, price: 1400, area: "Area 1", composition: "s0" },
    { id: 6, price: 1800, area: "Area 3", composition: "s+2" },
    { id: 7, price: 1200, area: "Area 4", composition: "s0" },
    { id: 8, price: 2200, area: "Area 2", composition: "s+1" },
    { id: 9, price: 1600, area: "Area 1", composition: "s+2" },
    { id: 10, price: 2000, area: "Area 3", composition: "s+1" },
    { id: 11, price: 3500, area: "Area 4", composition: "s+2" },
    { id: 12, price: 900, area: "Area 1", composition: "s0" },
    { id: 13, price: 2800, area: "Area 2", composition: "s+1" },
    { id: 14, price: 1700, area: "Area 3", composition: "s+2" },
    { id: 15, price: 1300, area: "Area 4", composition: "s0" },
    { id: 16, price: 2400, area: "Area 1", composition: "s+1" },
    { id: 17, price: 1900, area: "Area 2", composition: "s+2" },
    { id: 18, price: 1100, area: "Area 3", composition: "s0" },
    { id: 19, price: 3000, area: "Area 4", composition: "s+1" },
    { id: 20, price: 1600, area: "Area 1", composition: "s+2" },
    { id: 21, price: 2100, area: "Area 3", composition: "s0" },

    // Add more houses as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3, // Adjust the number of slides displayed at a time
    slidesToScroll: 1,
    autoplay: true,           // Enable automatic scrolling
    autoplaySpeed: 2000, 
    cssEase: "ease", // Add smooth scroll effect

  };
  

  return (
    <Slider {...settings} style={{margin:"50px"}}>
      {initialHouses.map((house) => (
        <div key={house.id}>
          {/* Use your HouseCard component to display each house */}
          <HouseCard key={house.id} house={house} />
        </div>
      ))}
    </Slider>
  );
};
export default HouseCardList;