const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');
const MQTT = require("async-mqtt");

const mqtt = MQTT.connect(process.env.MQTT_HOST || "tcp://broker.mqttdashboard.com:1883");


mqtt.on("connect", async()=>{
  try {
    mqtt.subscribe(process.env.TOPIC || 'jiaxi/secure', function (err) {
      if (!err) {
        console.log('Successfully connected and subscribed.')
      }
    })
	} catch (e){
		console.log(e.stack);
		process.exit();
	}
});


function linkMqttTo(wsInstance) {
  mqtt.on('message', function (topic, message) {
    // console.log('[MQTT]', message.toString())
    wsInstance.send(message.toString())
  })
}



const server = new https.createServer({
  cert: fs.readFileSync(process.env.SSL_CRT || './ssl/certificate.crt'),
  key: fs.readFileSync(process.env.SSL_KEY || './ssl/private.key')
});
const wss = new WebSocket.Server({ server });


wss.on('connection', function connection(ws) {
  ws.send('Server said hello.');
  linkMqttTo(ws)  
});

server.listen(process.env.PORT || 3355);