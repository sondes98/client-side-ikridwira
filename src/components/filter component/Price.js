// PriceSlider.js
import React from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceSlider = ({ priceRange, onChange }) => {
    return (
        <div>
            <Range
                min={0}
                max={5000}
                defaultValue={[priceRange.min, priceRange.max]}
                onChange={onChange}
            />
        </div>
    );
};

export default PriceSlider;
