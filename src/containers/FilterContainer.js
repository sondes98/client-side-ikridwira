import React from "react";
import FilterResult from "../components/filter component/FilterResult";
import HouseMap from "../components/map/houseMap";
const FilterContainer = () => {
  return (
    <div className="filter-section">
      <HouseMap/>
      <FilterResult />
    </div>
  );
};

export default FilterContainer;
