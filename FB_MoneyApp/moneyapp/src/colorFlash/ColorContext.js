import React, { createContext, useState, useEffect } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('');

  // Function to generate a random color
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    // Generate a random color initially
    setColor(generateRandomColor());

    // Set up a timer loop to update the color every 2 seconds (adjust as needed)
    const interval = setInterval(() => {
      setColor(generateRandomColor());
    }, 2000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ColorContext.Provider value={{ color }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorContext, ColorProvider };
