// FilterComponent.js
import React, { useState } from 'react';
import "./filter.css";
import PriceSlider from './PriceSlider';
import GovernorateDropdown from './GovernorateDropdown';
import DelegationDropdown from './DelegationDropdown';
import CompositionDropdown from './CompositionDropdown';  // Import the new component
import tunisiaData from '../../tunisia.json';

const FilterComponent = ({ onFilter }) => {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
    const [selectedGovernorate, setSelectedGovernorate] = useState('');
    const [selectedDelegation, setSelectedDelegation] = useState('');
    const [selectedComposition, setSelectedComposition] = useState(''); 

    const handlePriceChange = (newValue) => {
        setPriceRange({ min: newValue[0], max: newValue[1] });
    };

    const handleGovernorateChange = (e) => {
        const selectedGovernorate = e.target.value;
        setSelectedGovernorate(selectedGovernorate);
        setSelectedDelegation('');
    };

    const handleDelegationChange = (e) => {
        setSelectedDelegation(e.target.value);
    };

    const handleCompositionChange = (e) => {
        setSelectedComposition(e.target.value);
    };

    const handleFilterClick = () => {
        const filterCriteria = {
            priceRange: {
                min: parseFloat(priceRange.min),
                max: parseFloat(priceRange.max),
            },
            governorate: selectedGovernorate,
            delegation: selectedDelegation,
            composition: selectedComposition,  
        };
        console.log("Filter Criteria:", filterCriteria);
        onFilter(filterCriteria);
    };

    return (
        <div className='cont'>
            <label htmlFor="minPrice">Fix the price</label>
            <PriceSlider priceRange={priceRange} onChange={handlePriceChange} />

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

            <button onClick={handleFilterClick}>Apply Filter</button>
        </div>
    );
};

export default FilterComponent;
