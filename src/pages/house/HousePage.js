import React from "react";
import Layout from "../../components/Layout";
import ImageGallery from "../../components/imageHolder/ImageGallery";
import HouseDetails from "../../components/houseDetails/HouseDetails";
import ApartmentPlan from "../../components/houseDetails/ApartmentPlan";
import HouseVideo from "../../components/houseDetails/HouseVideo";


const HousePage = () => {
  const houseDet = {
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
      <HouseDetails details={houseDet} />
      <ApartmentPlan />
      <HouseVideo videoUrl={videoUrl} />
    </Layout>
  );
};

export default HousePage;
