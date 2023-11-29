import React, { useState } from 'react';
import HouseCard from './HouseCard';
import FilterComponent from '../filter component/FilterComponent';

const ResultFilterList = () => {
  const initialHouses = [
    { id: 1, price: 500, area: "Area 1", composition: "s+1" },
    { id: 2, price: 3000, area: "Area 2", composition: "s+2" },
    { id: 3, price: 1000, area: "Area 1", composition: "s+1" },
    { id: 4, price: 2514, area: "Area 2", composition: "s+1" },
    { id: 5, price: 1400, area: "Area 1", composition: "s0" },
    { id: 6, price: 1800, area: "Area 3", composition: "s+2" },
    { id: 7, price: 1200, area: "Area 4", composition: "s0" },
    { id: 8, price: 2200, area: "Area 2", composition: "s+1" },
    { id: 9, price: 1600, area: "Area 1", composition: "s+2" },
    { id: 10, price: 2000, area: "Area 3", composition: "s+1" },
    { id: 11, price: 3500, area: "Area 4", composition: "s+2" },
    { id: 12, price: 900, area: "Area 1", composition: "s0" },
    { id: 13, price: 2800, area: "Area 2", composition: "s+1" },
    { id: 14, price: 1700, area: "Area 3", composition: "s+2" },
    { id: 15, price: 1300, area: "Area 4", composition: "s0" },
    { id: 16, price: 2400, area: "Area 1", composition: "s+1" },
    { id: 17, price: 1900, area: "Area 2", composition: "s+2" },
    { id: 18, price: 1100, area: "Area 3", composition: "s0" },
    { id: 19, price: 3000, area: "Area 4", composition: "s+1" },
    { id: 20, price: 1600, area: "Area 1", composition: "s+2" },
    { id: 21, price: 2100, area: "Area 3", composition: "s0" },

    // Add more houses as needed
  ];

  const [filteredHouses, setFilteredHouses] = useState(initialHouses);

  const handleFilter = (filterCriteria) => {
    const { priceRange, area, composition } = filterCriteria;
  
    // Convert selected area to lowercase for case-insensitive comparison
    const lowerCaseArea = area.toLowerCase();
  
    // Filter by price range
    const filteredByPrice = initialHouses.filter((house) => {
      const priceInRange =
        (!priceRange.min || house.price >= parseFloat(priceRange.min)) &&
        (!priceRange.max || house.price <= parseFloat(priceRange.max));
  
      return priceInRange;
    });
  
    // Filter by area (case-insensitive)
    const filteredByArea = lowerCaseArea
      ? filteredByPrice.filter((house) => house.area.toLowerCase() === lowerCaseArea)
      : filteredByPrice;
  
    // Filter by composition
    const filteredByComposition = composition
      ? filteredByArea.filter((house) => house.composition === composition)
      : filteredByArea;
  
    // Update the state with the filtered results
    setFilteredHouses(filteredByComposition);
  };
  
  
    return (
        <div style={{ width: '90%', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
          <h1 style={{ textAlign: 'center', color: '#333' }}>Filter your future house</h1>
          <FilterComponent onFilter={handleFilter} />
    
          {/* Display the filtered results or a message */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {filteredHouses && filteredHouses.length > 0 ? (
              filteredHouses.map((house) => (
                <HouseCard key={house.id} house={house} />
              ))
            ) : (
              <div style={{ textAlign: 'center', color: '#555', marginTop: '20px' }}>
                No results found
              </div>
            )}
          </div>
        </div>
      );
    };
    

export default ResultFilterList;
