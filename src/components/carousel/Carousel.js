import React from "react";
import { Carousel } from "antd";
import residance1 from "../../images/residance1.png";
import residance2 from "../../images/residance2.png";
import residance3 from "../../images/residance3.png";
import group1 from "../../images/Group-1.png";
import "./Carousel.css";

export const ResidanceCarousel = () => {
  const viewportWidth = window.innerWidth;

  const h1Styles = {
    padding: "10px",
    position: "absolute",
    marginTop: "-500px",
    marginLeft: "700px",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "40px",
    fontWeight: "500",
    color: "#7d571e",
    letterSpacing: "1px",
    textTransform: "uppercase",
    backgroundColor: "#faebd791",
    borderRadius: "5px",
  };

  // Apply specific styles for smaller screens
  if (viewportWidth <= 1000 && viewportWidth >= 300) {
    h1Styles.marginTop = "-357px"; // Adjust the margin for smaller screens
    h1Styles.marginLeft = "76px";
    h1Styles.fontSize = "22px";
  }

  return (
    <>
      <Carousel className="carousel" autoplay>
        <div className="silde1">
          <img src={residance1} className="slide1" alt="1" />
          <h1 className="slider-text" style={h1Styles}>
            ikri dwira
          </h1>
        </div>
        <div className="silde1">
          <img src={residance2} className="slide1" alt="2" />
          <h1 className="slider-text" style={h1Styles}>
            ikri dwira
          </h1>
        </div>
        <div className="silde1">
          <img src={residance3} className="slide1" alt="3" />
          <h1 className="slider-text" style={h1Styles}>
            ikri dwira
          </h1>
        </div>
      </Carousel>
      <img src={group1} className="cover-img" alt="cover" />
    </>
  );
};

export default ResidanceCarousel;
