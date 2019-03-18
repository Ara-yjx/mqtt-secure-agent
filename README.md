# MQTT TLS Agent

## Try me

An instance of this demo is already running on 
wss://yejiaxi.cn:3355
.
This instance is listening the MQTT server broker.mqttdashboard.com for topic "jiaxi/secure"


You can connect to it using this wss client 
<https://jsbin.com/pavapuf/edit?js,console>

Then, goto <http://www.hivemq.com/demos/websocket-client/> to publish some data. Simply click [Connect] on the right, input "jiaxi/secure" into [Topic] and write something in [Message], then click [Publish]. Then you can see your data in the wss client.



## Installation

1.  Install Node.js (v8.0 or higher recommended) and npm

2.  Clone this repository

3.  Install dependencies (in project directory)

    `$ npm i`

4.  Prepare your SSL certificate and key files

5.  Launch program

    `$ node index.js`

    or launch with custom configuration by setting environment variables, e.g. 

    `$ PORT=3355 TOPIC="mytopic" node index.js`  

## Custom Configuration

| Variable | Default value | Description |
|:--|:--|:--|
| MQTT_HOST | tcp://broker.mqttdashboard.com:1883 | mqtt server to subscribe from |
| TOPIC | jiaxi/secure | topic to subscibe and encrypt |
| SSL_CRT | ./ssl/certificate.crt | path to SSL certificate file |
| SSL_KEY | ./ssl/private.key | path to SSL key file |
| PORT | 3355 | port number that this program should run on |