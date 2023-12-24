import React from "react";
import ImageGallery from "../../components/imageHolder/ImageGallery";
import "./HousePage.css";
import HouseDetails from "../../components/houseDetails/houseDetails";
import ApartmentPlan from "../../components/houseDetails/apartmentPlan";
import HouseVideo from "../../components/houseDetails/houseVideo";
import Layout from "../../components/laytout";


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
    <Layout>
      <div className="background-announce">
        {" "}
        <h1 className="tit-h1"> Home Details </h1>
      </div>
        <ImageGallery />
        <HouseDetails details={houseDetails} />
        <ApartmentPlan />
        <HouseVideo videoUrl={videoUrl} />
    </Layout>
  );
};

export default HousePage;
