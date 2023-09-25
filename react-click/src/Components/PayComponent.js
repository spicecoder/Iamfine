import React from 'react';
function PayComponent({ money, address, item }) 
{
  const handleClick = (moneyParam, addressParam, itemParam) => {

    alert(`Money: ${moneyParam}, Address: ${addressParam}, Item: ${itemParam}`);
    
  };
  return (
    <button onClick={() => handleClick(money, address, item)}>
      pay with me
    </button>
  );
}
export default PayComponent;