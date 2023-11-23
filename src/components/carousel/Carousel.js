import React from "react";
import { Carousel } from "antd";
import residance1 from "../../images/residance1.png";
import residance2 from "../../images/residance2.png";
import residance3 from "../../images/residance3.png";
// import residance4 from "../../images/residance4.png";
import "./Carousel.css";
export const ResidanceCarousel = () => {
  return (
    <Carousel className="carousel" autoplay>
      <div>
        <img src={residance1} alt="1" />
      </div>
      <div>
        <img src={residance2} alt="1" />
      </div>
      <div>
        <img src={residance3} alt="1" />
      </div>
      <div>
        <img src={residance1} alt="1" />
      </div>
    </Carousel>
  );
};
