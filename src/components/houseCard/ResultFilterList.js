import React, { useState, useEffect } from "react";
import HouseCard from "./HouseCard";
import FilterComponent from "../filter component/FilterComponent";
import jsonData from "../../data.json"; // Import the JSON data

const ResultFilterList = () => {
  // Use the data from jsonData
  const initialHouses = jsonData;

  const [filteredHouses, setFilteredHouses] = useState(initialHouses);
  const handleFilter = (filterCriteria) => {
    const { priceRange, governorate, delegation, composition } = filterCriteria;
  
    const filteredByPrice = initialHouses.filter((house) => {
      const priceInRange =
        (!priceRange.min || house.price >= parseFloat(priceRange.min)) &&
        (!priceRange.max || house.price <= parseFloat(priceRange.max));
  
      return priceInRange;
    });
  
    const filteredByGovernorate = governorate
      ? filteredByPrice.filter((house) => house.governorate === governorate)
      : filteredByPrice;
  
    const filteredByDelegation = delegation
      ? filteredByGovernorate.filter((house) => house.delegation === delegation)
      : filteredByGovernorate;
  
    const filteredByComposition = composition
      ? filteredByDelegation.filter((house) => house.composition === composition)
      : filteredByDelegation;
  
    setFilteredHouses(filteredByComposition);
  };
  

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>
        Filter your future house
      </h1>
      <FilterComponent onFilter={handleFilter} />
      <h1 style={{ textAlign: "center", color: "#333" }}>
        Available houses in this moment !
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {filteredHouses && filteredHouses.length > 0 ? (
          filteredHouses.map((house) => (
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
    </div>
  );
};

export default ResultFilterList;
