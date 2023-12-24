import React from 'react';

const GovernorateDropdown = ({ tunisiaData, selectedGovernorate, onChange }) => {
    return (
        <div>
            <label htmlFor="governorate">Governorate:</label>
            <select
                id="governorate"
                value={selectedGovernorate}
                onChange={onChange}
                aria-label="Select a Governorate"
            >
                <option value="">Select a Governorate</option>
                {tunisiaData.map((governorate) => (
                    <option key={governorate.Value} value={governorate.Value}>
                        {governorate.Name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GovernorateDropdown;
