import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PriceSlider from "./PriceSlider";
import GovernorateDropdown from "./GovernorateDropdown";
import DelegationDropdown from "./DelegationDropdown";
import CompositionDropdown from "./CompositionDropdown";
import tunisiaData from "../../tunisia.json";
import "./filter.css";

const FilterComponent = ({ onFilter }) => {
  const initialFilterState = {
    priceRange: { min: 0, max: 5000 },
    governorate: "",
    delegation: "",
    composition: "",
  };

  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [selectedGovernorate, setSelectedGovernorate] = useState("");
  const [selectedDelegation, setSelectedDelegation] = useState("");
  const [selectedComposition, setSelectedComposition] = useState("");
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setHasChanges(
      priceRange.min !== initialFilterState.priceRange.min ||
        priceRange.max !== initialFilterState.priceRange.max ||
        selectedGovernorate !== initialFilterState.governorate ||
        selectedDelegation !== initialFilterState.delegation ||
        selectedComposition !== initialFilterState.composition
    );
  }, [
    priceRange,
    selectedGovernorate,
    selectedDelegation,
    selectedComposition,
  ]);

  const handlePriceRangeChange = (newValue) => {
    setPriceRange({ min: newValue[0], max: newValue[1] });
  };

  const handleGovernorateChange = (e) => {
    const selectedGovernorate = e.target.value;
    setSelectedGovernorate(selectedGovernorate);
    setSelectedDelegation("");
  };

  const handleDelegationChange = (e) => {
    setSelectedDelegation(e.target.value);
  };

  const handleCompositionChange = (e) => {
    setSelectedComposition(e.target.value);
  };

  const handleApplyFilterClick = () => {
    const filterCriteria = {
      priceRange: {
        min: parseFloat(priceRange.min),
        max: parseFloat(priceRange.max),
      },
      governorate: selectedGovernorate,
      delegation: selectedDelegation,
      composition: selectedComposition,
    };

    if (hasChanges) {
      console.log("Filter Criteria:", filterCriteria);
      onFilter(filterCriteria);
    } else {
      console.log("No changes in filter criteria.");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        width: " 90%",
        backgroundImage:
          "url(https://themesflat.com/alipeskit/wp-content/uploads/2023/08/image1.jpg)",
        marginBottom: "100px",
        margin: " 100px auto",
        width: "100%",
        height: "500px",
      }}
    >
      <div className="background-l"></div>
      <div className="background-r"></div>
      <h1
        style={{
          color: "#333",
          position: "relative",
          textAlign: "center",
          letterSpacing: "9px",
          zIndex: "1",
          padding: "10px",
          fontSize: "55px",
          fontWeight: "400",
        }}
      >
        Filter your future house
      </h1>
      <div
        style={{
          boxShadow: "3px 3px 23px -5px #ccc",
          padding: "27px",
          margin: "-30px 560px 50px 563px",
          flexDirection: "column",
          display: "flex",
          width: "23%",
          position: "absolute",
          backgroundColor: "rgb(204 204 204 / 68%)",
        }}
      >
        <label htmlFor="minPrice">Fix the price</label>
        <PriceSlider
          priceRange={priceRange}
          onChange={handlePriceRangeChange}
        />

        <GovernorateDropdown
          tunisiaData={tunisiaData}
          selectedGovernorate={selectedGovernorate}
          onChange={handleGovernorateChange}
        />

        <DelegationDropdown
          tunisiaData={tunisiaData}
          selectedGovernorate={selectedGovernorate}
          selectedDelegation={selectedDelegation}
          onChange={handleDelegationChange}
        />

        <CompositionDropdown
          selectedComposition={selectedComposition}
          onChange={handleCompositionChange}
        />

        <button onClick={handleApplyFilterClick} disabled={!hasChanges}>
          Apply Filter
        </button>
      </div>
    </div>
  );
};

FilterComponent.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default FilterComponent;
