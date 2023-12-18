// CompositionDropdown.js
import React from 'react';

const CompositionDropdown = ({ selectedComposition, onChange }) => {
    return (
        <div>
            <label htmlFor="composition">Composition:</label>
            <select id="composition" value={selectedComposition} onChange={onChange}>
                <option value="">Select a Composition</option>
                <option value="s0">s0</option>
                <option value="s+1">s+1</option>
                <option value="s+2">s+2</option>
                <option value="s+3">s+3</option>
                <option value="&gt; s+2">&gt; s+2</option>
                {/* Add more composition options as needed */}
            </select>
        </div>
    );
};

export default CompositionDropdown;
