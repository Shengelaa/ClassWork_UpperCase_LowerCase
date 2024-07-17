import React, { useState } from 'react';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const toggleCase = (index) => {
    const newItems = items.map((item, i) => 
      i === index ? (item === item.toLowerCase() ? item.toUpperCase() : item.toLowerCase()) : item
    );
    setItems(newItems);
  };

  return (
    <div>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={handleAddItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li 
            key={index} 
            onClick={() => toggleCase(index)}
            style={{ cursor: 'pointer' }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;