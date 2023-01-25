import React, { useState } from 'react';
import data from '../../data.json';

function Dropdown() {
  const [selectedCategory1, setSelectedCategory1] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const options = [...new Set(data.map(item => item.LiqSol))];
  const names = data.filter(item => item.LiqSol === selectedCategory1).map(item => item.Name);
  
  return (
    <div>
      <select value={selectedCategory1} onChange={e => {
          setSelectedCategory1(e.target.value);
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