import React, { useContext } from 'react';
import { ColorContext } from './ColorContext';

const ACircle = () => {
  const { color } = useContext(ColorContext);

  // Function to calculate the complementary color
  const calculateComplementaryColor = (color) => {
    const hexValue = color.slice(1); // Remove the "#" character
    const decimalValue = parseInt(hexValue, 16);
    const complementValue = 16777215 - decimalValue; // Calculate the complement value
    const complementColor = '#' + complementValue.toString(16).toUpperCase(); // Convert back to hex color
    return complementColor;
  };

  const complementaryColor = calculateComplementaryColor(color);

  return (
    <div
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: complementaryColor,
      }}
    >
      
    </div>
  );
};

export default  ACircle ;
