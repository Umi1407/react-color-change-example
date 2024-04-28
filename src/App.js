import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  let colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "cornflowerblue",
    "blue",
    "darkblue",
    "violet",
    "purple",
    "pink"
  ];
  const [color, setColor] = useState(0);
  const divBack = { backgroundColor: colors[color] };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prev) => (prev >= colors.length ? (prev = 0) : prev + 1));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });
  return (
    <div style={divBack} className="div">
      <h1>{colors[color]}</h1>
    </div>
  );
}

export default App;
