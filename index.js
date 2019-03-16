const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');
 
const server = new https.createServer({
  cert: fs.readFileSync('./ssl/certificate.crt'),
  key: fs.readFileSync('./ssl/private.key')
});
const wss = new WebSocket.Server({ server });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});
 
server.listen(8080);