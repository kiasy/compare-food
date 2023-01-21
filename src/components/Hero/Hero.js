import React, { useState } from 'react';
import data from '../../data.json';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const options = [...new Set(data.map(item => item.LiqSol))];
  const names = data.filter(item => item.LiqSol === selectedOption).map(item => item.Name);
  
  return (
    <div>
      <select value={selectedOption} onChange={e => {
          setSelectedOption(e.target.value);
          setSelectedName('');
          }
        }>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select value={selectedName} onChange={e => setSelectedName(e.target.value)}>
        {names.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;