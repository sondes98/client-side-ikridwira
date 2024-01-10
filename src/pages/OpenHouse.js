import React, { useState, useRef } from 'react';
import './OpenHouse.css'; 

const OpenHouse = () => {
  const [numbers, setNumbers] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([...Array(6)].map(() => React.createRef()));

  const handleChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value.replace(/\D/, '');
    setNumbers(newNumbers);

    if (value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
  };

  const handleSubmit = () => {
    if (validateNumbers()) {
      const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
      alert(`House opened!`);
    } else {
      alert('Please enter valid numbers for all fields.');
    }
  };

  const validateNumbers = () => {
    return numbers.every((num) => num !== '' && !isNaN(num));
  };

  return (
    <div className="number-input-container">
      <h2>Enter 6 Numbers</h2>
      <div className="input-fields">
        {numbers.map((num, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={num}
            onChange={(e) => handleChange(index, e.target.value)}
            ref={inputRefs.current[index]}
          />
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default OpenHouse;
