import React from "react";
import "./ApartmentPlan.css"; // Import a CSS file for styling

const ApartmentPlan = () => {
  // Sample data for the apartment plan details
  const planDetails = {
    totalArea: "120 sqm",
    floorNo: 5,
    currentStatus: "Available",
    numOfRooms: 3,
    parking: "Available",
    location: "City Center",
    price: "$1500/month",
  };
  const hStyles = {
    fontSize: "49px",
    color: "#3E3830",
    fontFamily: "Teko",
    letterSpacing: "5px",
    textAlign: " left",
    marginLeft: "109px",
    fontWeight: " 500",
  };

  return (
    <div>
      <h1 style={hStyles}>Apartment Plan</h1>
      <div className="apartment-plan-container">
        <div className="table-container">
          <table className="plan-table">
            <tbody>
              {Object.entries(planDetails).map(([key, value], index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="image-container">
          <img
            src="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/plan.png"
            alt="Apartment Plan"
            className="apartment-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ApartmentPlan;
