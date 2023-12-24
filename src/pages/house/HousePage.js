import React from "react";
import ImageGallery from "../../components/imageHolder/ImageGallery";
import "./HousePage.css";
import HouseDetails from "../../components/houseDetails/houseDetails";
import ApartmentPlan from "../../components/houseDetails/apartmentPlan";
import HouseVideo from "../../components/houseDetails/houseVideo";

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
  const videoUrl = "https://www.youtube.com/watch?v=5LBD5jPHGrA";
  return (
    <div>
      <h1 className="home-det-h1">HOME DETAILS</h1>
      <ImageGallery />
      <HouseDetails details={houseDetails} />
      <ApartmentPlan />
      <HouseVideo videoUrl={videoUrl} />
    </div>
  );
};

export default HousePage;
