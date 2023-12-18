import React from "react";
import ImageGallery from "../../components/imageHolder/ImageGallery";
import "./HousePage.css";

const HousePage = () => {
  return (
    <div>
      <h1 className="home-det-h1">HOME DETAILS</h1>

      <ImageGallery />
    </div>
  );
};

export default HousePage;
