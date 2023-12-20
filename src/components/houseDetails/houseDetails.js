import React from "react";
import "./houseDetails.css";

const HouseDetails = ({ details }) => {
  const { surface, location, bedroom, kitchen, livingRoom, terrace, bathroom } =
    details;

  const backgroundStyle = {
    height: "172px",
    backgroundImage:
      "url(https://themesflat.com/alipeskit/wp-content/uploads/2023/08/building-1.png)",
    marginTop: "100px",
    backgroundSize: "573px",
    backgroundRepeat: " no-repeat",
    backgroundPosition: "right",
    backgroundColor: "#F6F4F1",
    padding: "20px",
    marginBottom: "100px",
  };

  return (
    <div className="house-details" style={backgroundStyle}>
      <ul className="list-details">
        <li>
          <div className="sub-list">
            {" "}
            <img
              style={{ margin: "20px", width: "60px", height: "60px" }}
              alt="surface"
              src="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/2249408.png"
            />{" "}
            <h6> {surface}</h6>
          </div>

          <h5>Surface</h5>
        </li>
        <li>
          <div className="sub-list">
            {" "}
            <img
              style={{ margin: "20px", width: "60px", height: "60px" }}
              alt="Location"
              src="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/0333.png"
            />{" "}
            <h6>{location}</h6>
          </div>

          <h5>Location</h5>
        </li>
        <li>
          <div className="sub-list">
            <img
              style={{ margin: "20px", width: "60px", height: "60px" }}
              alt="bedroom"
              src="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/3139642-1.png"
            />{" "}
            <h6>{bedroom}</h6>
          </div>

          <h5>bedroom</h5>
        </li>
        <li>
          <div className="sub-list">
            {" "}
            <img
              style={{ margin: "20px", width: "60px", height: "60px" }}
              alt="kitchen"
              src="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/0555.png"
            />{" "}
            <h6> {kitchen}</h6>
          </div>

          <h5>kitchen</h5>
        </li>
        <li>
          <div className="sub-list">
            {" "}
            <img
              style={{ margin: "20px", width: "60px", height: "60px" }}
              alt="livingRoom"
              src="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/1618271.png"
            />{" "}
            <h6>{livingRoom}</h6>
          </div>

          <h5>living Room</h5>
        </li>
        <li>
          <div className="sub-list">
            {" "}
            <img
              style={{ margin: "20px", width: "60px", height: "60px" }}
              alt="terrace"
              src="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/1721858.png"
            />{" "}
            <h6> {terrace}</h6>
          </div>

          <h5>terrace</h5>
        </li>
        <li>
          <div className="sub-list">
            {" "}
            <img
              style={{ margin: "20px", width: "60px", height: "60px" }}
              alt="bathroom"
              src="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/3289742.png"
            />{" "}
            <h6> {bathroom}</h6>
          </div>

          <h5>bathroom</h5>
        </li>
      </ul>
    </div>
  );
};

export default HouseDetails;