import React from "react";
import FilterResult from "../components/filterComponent/FilterResult";
import HouseMap from "../components/map/HouseMap";
const FilterContainer = () => {
  return (
    <div className="filter-section">
        <HouseMap/>
        <FilterResult />
    </div>
  );
};

export default FilterContainer;
