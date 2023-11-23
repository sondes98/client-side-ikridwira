import React from "react";
import app1 from "../../images/app1.png";
import "./AppartementCard.css";

export const AppartementCard = () => {
  return (
    <div className="appart-container">
      <div>
        {" "}
        <img src={app1} alt="appartement" style={{ width: "300px" }} />
      </div>
      <div>
        {" "}
        <h1 className="card-title">luxery appartement</h1>
        <p className="description">explore now</p>
      </div>
    </div>
  );
};
