**Installation**

1. Download Node.js on your computer (v8.0 or higher recommended)

2. Clone this repository

3. Install dependencies

   `$ npm i`

4. Edit `config.js`
   
   Please change the value of `subAgent.homeServerPassword`, `subAgent.topic`, 

   For more information about configuration, please refer to the "Architecture and Launching" section below.



**Architecture and Launching**

**Subsciption Agent**

| Role | Default Entity Address | How to Launch | 
|:---:|:---:|:---|:---|
| Public Sensor | http://www.hivemq.com/demos/websocket-client/ | Open this webpage; <br/> Click "connect"; <br/> In "Publish", set "Topic" to some random string (DON'T USE DEFAULT TOPIC!); |
| ↓ |
| Public Server | broker.mqttdashboard.com | 
| ↓ |
| Subsciption Agent | this program | In `config.js`, change the value of `subAgent.topic` to the topic in public sensor, and change the value of `subAgent.homeServerPassword` to Jiaxi Ye's PERM#; <br/> Run `$ npm run subAgent` |
| ↓ |
| Home Server | yejiaxi.cn <br/> (username: jiaxiye; password: my PERM#)
| ↓ |
| Home Monitor | http://www.hivemq.com/demos/websocket-client/ | Open this webpage IN ANOTHER TAB; <br/> Set "Host" to `yejiaxi.cn` and click "Connect"; <br/> In "Subscriptions", click "Add New Topic Subsciption"; <br/> Enter the same topic as in public sensor, then click "Subscribe"; |

**TLS Agent (still buggy, sorry)**

| Role | Default Entity Address | How to Launch |
|:---:|:---:|:---|:---|
| Home Sensor | http://www.hivemq.com/demos/websocket-client/ | Open this webpage; <br/> Click "connect"; <br/> In "Publish", set "Topic" to some random string (DON'T USE DEFAULT TOPIC!); |
| ↓ |
| Home Server | broker.mqttdashboard.com |
| ↓ |
| TLS Agent | this program | run `$ npm run tlsAgent` |
| ↓ |
| Remote Private Monitor | this program | run `$ npm run tlsClient` |