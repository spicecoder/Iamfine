 import {React,useState} from "react";
 //import './moneyupdate.css'
function MoneyUpdate(props) {
  //let  amount = props.currenAmount;
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [addAmount, setAddAmount] = useState(0);
   
   const handleWithdrawChange = (event) => {
    setWithdrawAmount(event.target.value);
   };
   const handleAddChange = (event) => {
    setAddAmount(event.target.value);
    };
 
  const handleAddMoney = () => {
    fetch(`${props.apiUrl}/money/${addAmount}`, { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        props.setCurrentMoney(data.currentMoney)
        console.log("addmoney:" + JSON.stringify(data));
      }).catch((error) => {
        console.error(error);
        alert("Failed to add money ")})
  };

  const handleSubtractMoney = () => {
    fetch(`${props.apiUrl}/money/${-withdrawAmount}`, { method: "PUT" })
      .then((response) => response.json())
      .then((data) => {
        props.setCurrentMoney(data.currentMoney)
        console.log("subtractmoney:" + JSON.stringify(data));
      }).catch((error) => {
        console.error(error);
        alert("Failed to subtract money. Please try again later.");
      });
  };

  return (
    <div className="money-input">
      <h2>Update Money</h2>
      <div>
        <label>
          "+":
          <input type="number" value={addAmount} onChange={handleAddChange} />
        </label>
        <button onClick={handleAddMoney}>Add</button>
      </div>
      <div>
        <label>
          "-":
          <input type="number" value={withdrawAmount} onChange={handleWithdrawChange} />
        </label>
        <button onClick={handleSubtractMoney}>Subtract</button>
      </div>
    </div>
  );
}

export default MoneyUpdate;
