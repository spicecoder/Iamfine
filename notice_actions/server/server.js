const PORT = 5000;
const express = require('express');
const app = express();         //defined express app

app.get('/send-notification', (req, res) => {
   
    console.log(`Notification  interaction`);
    res.json({ success: true });
    // res.send("Just Checking if one more response works"); //did not work
});
app.get('/', (req, res) => {
   
    console.log(`Welcome to Notification`);
    res.send("Welcome to the Server");   //once done it will close the connection one req,one response
    // res.send("I am too excited");
});
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
// var notification = "A new notification"
// console.log("My notification",notification);
// var notification_object = {"Greetings":"Early Morning","Play":"Soccer","Donow":'alert("Start Soon")'}
// var salary = 7500;
// console.log("Greetings",notification_object.Greetings, "Play Today",notification_object.Play)
// var instruction = notification_object.Donow
// console.log(instruction);
