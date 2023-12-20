import React, { useState } from "react";
import {
  Grid,
  Card,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import "./ImageGallery.css"; // Import a CSS file for styling

const images = [
  "https://i.pinimg.com/564x/cf/ff/c9/cfffc961fb519771b29261e688a966f3.jpg",
  "https://i.pinimg.com/564x/0c/dd/c6/0cddc619eb40ec18bb4c260d5cc77e7c.jpg",
  "https://i.pinimg.com/564x/34/bc/80/34bc8083bd4304658f32af0cd21c947f.jpg",
  "https://i.pinimg.com/564x/a5/c9/a7/a5c9a7a735e988ddb932372bca95f3da.jpg",
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const openModal = (index) => {
    setSelectedImage(index);
    setShowMore(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateToNextImage = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const navigateToPreviousImage = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const dialogPaperStyle = {
    backgroundColor: "#efe0cb99",
  };

  return (
    <div className="image-gallery-container">
      <Grid
        container
        spacing={2}
        style={{ width: "885px", height: "373px", margin: "0 auto" }}
      >
        {images.slice(0, showMore ? images.length : 4).map((image, index) => (
          <Grid item xs={7} sm={4} md={3} key={index}>
            <Card className="image-card" onClick={() => openModal(index)}>
              <CardMedia
                component="img"
                alt={`Image ${index + 1}`}
                image={image}
                className="image"
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      {!showMore && (
        <div>
          <img
            style={{
              top: "440px",
              position: "absolute",
              left: "1208px",
              margin: "8px",
            }}
            className="im-arrow"
            src={
              "https://themesflat.com/alipeskit/wp-content/uploads/2023/08/arrow.png"
            }
            alt="arrow"
          />
          <Button
            variant="contained"
            color="primary"
            style={{
              width: "176px",
              boxShadow: "none",
              borderRadius: "0px",
              border: "none",
              backgroundColor: "#73511e",
              height: "37px",
              top: -"63px",
              left: "895px",
              margin: "8px",
            }}
            onClick={() => setShowMore(true)}
          >
            See More
          </Button>
        </div>
      )}
      {showMore && (
        <Dialog
          open={selectedImage !== null}
          onClose={() => setShowMore(true)}
          maxWidth="md"
          fullWidth
          PaperProps={{ style: dialogPaperStyle }}
        >
          <div className="modal-container">
            <IconButton
              style={{ left: "813px" }}
              className="close-button"
              onClick={() => setShowMore(false)}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent>
              <div className="dialog-buttons">
                <IconButton
                  onClick={navigateToPreviousImage}
                  className="arrow-button"
                  style={{ marginTop: "250px" }}
                >
                  <ArrowBackIosNewSharpIcon />
                </IconButton>
                <img
                  src={images[selectedImage]}
                  alt={`Image ${selectedImage + 1}`}
                  className="modal-image"
                />
                <IconButton
                  onClick={navigateToNextImage}
                  className="arrow-button"
                  style={{ marginTop: "250px" }}
                >
                  <ArrowForwardIosSharpIcon />
                </IconButton>
              </div>
            </DialogContent>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default ImageGallery;
