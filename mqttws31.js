var reconnectionTimeout = 2000;
    var host = "mqtt.parxsys.com";
    var port = 8083;
    var client = new Paho.MQTT.Client(host, Number(port), "clientId");
    // set callback handlers
    client.onConnectionLost = onConnectionLost;
    client.onMessageArrived = onMessageArrived;

    // connect the client
	var publishMsg = function(){
    	client.connect({onSuccess:onConnect, useSSL: true, userName: "ilovecycling", password: "welcome@234@"});
	}	

    // called when the client connects
    function onConnect() {
      // Once a connection has been made, make a subscription and send a message.
      console.log("onConnect");
      client.subscribe("device/command/Mumbai_Bus_Shelter");
	  var msg = 'play1'
	  var d = new Date();
	  var mqtt_msg = ` ${msg} ${d} `
	  console.log(mqtt_msg);
      message = new Paho.MQTT.Message(mqtt_msg);
      message.destinationName = "device/command/Mumbai_Bus_Shelter";
      client.send(message);
    }

    // called when the client loses its connection
    function onConnectionLost(responseObject) {
      if (responseObject.errorCode !== 0) {
        console.log("onConnectionLost:"+responseObject.errorMessage);
      }
    }

    // called when a message arrives
    function onMessageArrived(message) {
      console.log("onMessageArrived:"+message.payloadString);
    }