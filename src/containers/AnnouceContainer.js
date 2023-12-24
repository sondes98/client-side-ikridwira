import React, { useState } from 'react';
import FilterComponent from '../components/filter component/filterComponent';
import { useNavigate } from 'react-router';
import jsonData from '../data.json';

const AnnouceContainer = () => {
  const initialHouses = jsonData;

  const navigate = useNavigate();

  const [filteredHouses, setFilteredHouses] = useState([]);

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
    navigate('/announces');
  };
  return (
    <div>
      <FilterComponent onFilter={handleFilter} />
    </div>
  );
};
export default AnnouceContainer;
