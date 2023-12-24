import React from 'react';

const DelegationDropdown = ({ selectedGovernorate, tunisiaData, selectedDelegation, onChange }) => {
    const selectedGovernorateData = tunisiaData.find(
        (governorate) => governorate.Value === selectedGovernorate
    );

    return (
        <div>
            {selectedGovernorate && selectedGovernorateData && (
                <>
                    <label htmlFor="delegation">Delegation:</label>
                    <select id="delegation" value={selectedDelegation} onChange={onChange}>
                        <option value="">Select a Delegation</option>
                        {selectedGovernorateData.Delegations.map((delegation) => (
                            <option key={delegation.Value} value={delegation.Value}>
                                {delegation.Name}
                            </option>
                        ))}
                    </select>
                </>
            )}
        </div>
    );
};

export default DelegationDropdown;
