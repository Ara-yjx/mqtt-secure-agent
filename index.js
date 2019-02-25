var MQTT = require("async-mqtt");

const topic = 'te/st'
var client = MQTT.connect("tcp://yejiaxi.cn:1883");


client.on("connect", async () => {

	console.log("onConnect:");
	try {
		await client.subscribe(topic);

		await client.publish(topic, "It works!");
		// await client.end();
    console.log("Done");
    
	} catch (e){
		console.log('ERROR')
		console.log(e.stack);
		// process.exit();
	}
})

client.on("message", async (topic, message) => {
  console.log('onMessage:')
	console.log(message.toString())
	try {
		await client.publish(topic, message);
		// await client.end();
    console.log("Done");
    
	} catch (e){
		console.log(e.stack);
		process.exit();
	}
})
