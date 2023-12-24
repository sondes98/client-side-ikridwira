import React, { useState, useEffect } from "react";
import HouseCard from "./HouseCard";
import FilterComponent from "../filter component/filterComponent";
import jsonData from "../../data.json";

const ResultFilterList = () => {
  const initialHouses = jsonData;

  const [filteredHouses, setFilteredHouses] = useState(initialHouses);
  const [displayedHouses, setDisplayedHouses] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const handleFilter = (filterCriteria) => {
    // Apply your filtering logic based on filterCriteria
    let filteredData = initialHouses;

    if (filterCriteria.priceRange) {
      filteredData = filteredData.filter(
        (house) =>
          house.price >= parseFloat(filterCriteria.priceRange.min) &&
          house.price <= parseFloat(filterCriteria.priceRange.max)
      );
    }

    if (filterCriteria.governorate) {
      filteredData = filteredData.filter(
        (house) => house.governorate === filterCriteria.governorate
      );
    }

    if (filterCriteria.delegation) {
      filteredData = filteredData.filter(
        (house) => house.delegation === filterCriteria.delegation
      );
    }

    if (filterCriteria.composition) {
      filteredData = filteredData.filter(
        (house) => house.composition === filterCriteria.composition
      );
    }

    setFilteredHouses(filteredData);
  };

  useEffect(() => {
    // Update displayedHouses when filteredHouses change
    setDisplayedHouses(filteredHouses.slice(0, 3));
    setShowMore(filteredHouses.length > 3);
  }, [filteredHouses]);

  const handleShowMore = () => {
    const nextBatch = displayedHouses.length + 3;
    setDisplayedHouses(filteredHouses.slice(0, nextBatch));
    setShowMore(nextBatch < filteredHouses.length);
  };

  return (
    <div>
      <FilterComponent onFilter={handleFilter} />
      <h1 style={{ textAlign: "center", color: "#333" }}>
        Available houses in this moment!
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          backgroundColor: "#d8be9678",
        }}
      >
        {displayedHouses && displayedHouses.length > 0 ? (
          displayedHouses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))
        ) : (
          <div
            style={{ textAlign: "center", color: "#555", marginTop: "20px" }}
          >
            No results found
          </div>
        )}
      </div>
      {showMore && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button onClick={handleShowMore}>Show More</button>
        </div>
      )}
    </div>
  );
};

export default ResultFilterList;
