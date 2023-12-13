import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router";

const HouseCard = ({ house }) => {
  const [name, setName] = useState(house.name);
  const [price, setPrice] = useState(house.price);
  const [area, setArea] = useState(house.area);
  const [composition, setComposition] = useState(house.composition);

  const navigate = useNavigate();

  const handleImageClick = (index) => {
    navigate(`/housePage/${house.id}`);
  };
  

  return (
    <Card  sx={{
      maxWidth: 345,
      margin: "20px",
      "&:hover": {
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
        width:"700px"
      },
    }}
    style={{ margin: "0 auto" }}
    className="cardhouse">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/Image11.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">Price: {price}dnt</Typography>
          <Typography variant="body2">Area: {area}</Typography>
          <Typography variant="body2">Composition: {composition}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleImageClick()}
>
          more info
        </Button>
      </CardActions>
    </Card>
  );
};


export default HouseCard;

