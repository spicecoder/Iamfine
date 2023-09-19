import React, { useState, useEffect } from "react";

function MoneyDisplay(props) {
  const [currentMoney, setCurrentMoney] = useState(0);

  useEffect(() => {
    fetch(`${props.apiUrl}/money`)
      .then((response) => response.json())
      .then((data) => {
        setCurrentMoney(data.currentMoney);
        console.log("display:"+JSON.stringify(data))
      });
  }, [currentMoney, props.apiUrl]);

  return (
    <div>
      <h2>Current Money:{props.currentMoney ? props.currentMoney : currentMoney}</h2>
    </div>
  );
}

export default MoneyDisplay;
