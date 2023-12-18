import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router";
import priceImage from "../../assets/images/price.png";
const HouseCard = ({ house }) => {
  const [name, setName] = useState(house.name);
  const [price, setPrice] = useState(house.price);
  const [delegation, setdelegation] = useState(house.delegation);
  const [governorate, setgovernorate] = useState(house.governorate);

  const [composition, setComposition] = useState(house.composition);

  const navigate = useNavigate();

  const handleImageClick = (index) => {
    navigate(`/housePage/${house.id}`);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "20px",
        "&:hover": {
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "transparent",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/Image11.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Typography
              variant="body2"
              style={{
                display: "flex",
                margin: "5px",
              }}
            >
              {" "}
              <img width="37px" height="30px" src={priceImage} />
              <h5> {price}dnt</h5>
            </Typography>
            <Typography
              variant="body2"
              style={{ display: "flex", margin: "5px" }}
            >
              <img
                width="37px"
                height="30px"
                src="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/0333.png"
              />
              <h5>{governorate},{delegation}</h5>
            </Typography>
          </div>

          <Typography variant="body2">
            <h5 style={{textAlign:"center"}}> Composition {composition}</h5>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center", // Center items vertically
                borderTop: "1px solid rgb(221, 221, 221)",
              }}
            >
              <img src="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/1618271.png" />
              <div
                style={{
                  height: "70px", // Adjust the height of the separator line
                  borderLeft: "1px solid rgb(221, 221, 221)", // Separator line style
                  margin: "4px",
                }}
              />
              <img src="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/259973.png" />
              <div
                style={{
                  height: "70px", // Adjust the height of the separator line
                  borderLeft: "1px solid rgb(221, 221, 221)", // Separator line style
                  margin: "4px",
                }}
              />
              <img
                src="https://themesflat.com/alipeskit/wp-content/uploads/2023/08/3139642-1.png"
                style={{ margin: "4px" }}
              />
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleImageClick()}>
          more info
        </Button>
      </CardActions>
    </Card>
  );
};

export default HouseCard;
