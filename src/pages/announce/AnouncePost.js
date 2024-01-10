import React, { useState } from "react";
import { Button, TextField, Typography, Grid, Paper } from "@mui/material";
import CompositionDropdown from "../../components/filterComponent/CompositionDropdown";
import GovernorateDropdown from "../../components/filterComponent/GovernorateDropdown";
import DelegationDropdown from "../../components/filterComponent/DelegationDropdown";
import tunisiaData from "../../tunisia.json";

const HouseRentAnnouncementForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedGovernorate, setSelectedGovernorate] = useState("");
  const [selectedDelegation, setSelectedDelegation] = useState("");
  const [selectedComposition, setSelectedComposition] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnnouncement = {
      id: Math.random(),
      name,
      price,
      delegation: selectedDelegation,
      governorate: selectedGovernorate,
      composition: selectedComposition,
    };

    onSubmit(newAnnouncement);

    setName("");
    setPrice("");
    setSelectedDelegation("");
    setSelectedGovernorate("");
    setSelectedComposition("");
  };

  return (
    <Grid container justifyContent="center" mt={4}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} p={3} sx={{ fontFamily: "Teko", padding: "20px" }}>
          <Typography
            style={{
              fontFamily: "Teko",
              letterSpacing: "2px",
              fontSize: "50px",
            }}
            variant="h1"
            align="center"
            mb={2}
          >
            Post Announcement
          </Typography>
          <form onSubmit={handleSubmit}>
            <label style={{ fontFamily: "Teko" }}>
              {" "}
              What you have to rent:
            </label>
            <TextField
              fullWidth
              label="description"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={handleNameChange}
              required
            />
            <label style={{ fontFamily: "Teko" }}> Set the price:</label>
            <TextField
              fullWidth
              label="Price"
              variant="outlined"
              margin="normal"
              value={price}
              onChange={handlePriceChange}
              required
            />

            <DelegationDropdown
              tunisiaData={tunisiaData}
              selectedGovernorate={selectedGovernorate}
              selectedDelegation={selectedDelegation}
              onChange={(e) => setSelectedDelegation(e.target.value)}
            />
            <GovernorateDropdown
              tunisiaData={tunisiaData}
              selectedGovernorate={selectedGovernorate}
              onChange={(e) => setSelectedGovernorate(e.target.value)}
            />
            <CompositionDropdown
              selectedComposition={selectedComposition}
              onChange={(e) => setSelectedComposition(e.target.value)}
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              mt={2}
              sx={{ backgroundColor: "#CD8C66" }}
            >
              Submit Announcement
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HouseRentAnnouncementForm;
