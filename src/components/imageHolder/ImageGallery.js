import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";

const images = [
  "https://i.pinimg.com/564x/cf/ff/c9/cfffc961fb519771b29261e688a966f3.jpg",
  "https://i.pinimg.com/564x/0c/dd/c6/0cddc619eb40ec18bb4c260d5cc77e7c.jpg",
  "https://i.pinimg.com/564x/34/bc/80/34bc8083bd4304658f32af0cd21c947f.jpg",
  "https://i.pinimg.com/564x/a5/c9/a7/a5c9a7a735e988ddb932372bca95f3da.jpg",
];

const ImageGallery = () => {
  return (
    <div className="">
      <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                className=""
                image={image}
                title={`Image ${index + 1}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ImageGallery;
