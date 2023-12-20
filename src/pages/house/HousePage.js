import React from "react";
import ImageGallery from "../../components/imageHolder/ImageGallery";
import "./HousePage.css";
import HouseDetails from "../../components/houseDetails/houseDetails";

const HousePage = () => {
  const houseDetails = {
    surface: "360m",
    location: "tunis, ariana",
    bedroom: "2",
    kitchen: "1",
    livingRoom: "1",
    terrace: "1",
    bathroom: "1",
  };
  return (
    <div>
      <h1 className="home-det-h1">HOME DETAILS</h1>
      <ImageGallery />
      <HouseDetails details={houseDetails} />
    </div>
  );
};

export default HousePage;
