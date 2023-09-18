const express = require('express');
const http = require('http');  
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
app.use(express.static('public'));
app.get('/http-endpoint', (req, res) => {
    res.send('This is a regular HTTP response.');
});
wss.on('connection', (ws) => {
    console.log('Client connected to WebSocket');
    ws.send('This is a message from the WebSocket server.');
    ws.on('message', (message) => {
        console.log(`Received message => ${message}`);
    });
});
server.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});












