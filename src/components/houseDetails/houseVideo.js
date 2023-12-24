import React, { useState } from "react";
import "./HouseVideo.css"; // Don't forget to create this CSS file for styling

const HouseVideo = ({ videoUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="your-component">
      <div className="background-left"></div>
      <div className="background-right"></div>
      <div className="content">
        <div className="play-button" onClick={openModal}>
          <span>&#9658;</span>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <iframe
              width="560"
              height="315"
              src={videoUrl}
              title="Your Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default HouseVideo;
