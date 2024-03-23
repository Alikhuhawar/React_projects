import React, { useState } from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState(1);

  const addValue = () => {
    setCounter(counter + 1);
    console.log("value added", counter);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }
  
  return (
    <div className="App">
      <h1>Counter Project</h1>
      <h2>counter value = {counter}</h2>

      <button className="counter-button" onClick={addValue}>Add Value</button>
      <br />
      <button className="counter-button" onClick={removeValue}>Remove Value</button>
    </div>
  );
}

export default App;
