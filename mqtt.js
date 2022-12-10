const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);

// const host = 'wss://mqtt.parxsys.com:8083/mqtt'
const host = 'wss://g11c161f.us-east-1.emqx.cloud:8084/mqtt';

const options = {
  keepalive: 60,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 5000,
  connectTimeout: 30 * 1000,
  username: "ilovecycling",
  password: "welcome@234@",
  will: {
    topic: 'device/command/Mumbai_Bus_Shelter',
    payload: 'Connection Closed abnormally..!',
    qos: 2,
    retain: true
  },
}

console.log('Connecting mqtt client')

const client = mqtt.connect(host, options)

client.on('error', (err) => {
  console.log('Connection error: ', err)
  client.end()
})

var publishMsg = function(topic, message){
  console.log('SOS click')
  var d = new Date();
  d = new Date(d.getTime() - 3000000);
  var date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
  console.log(date_format_str);
  let mqtt_msg = ` ${message} ${date_format_str} `
  //console.log(mqtt_msg);
  // Publish
  client.publish(topic, mqtt_msg, { qos: 2, retain: false })
}

client.on('connect', () => {
  console.log('Client connected:' + clientId)
  // Subscribe
  client.subscribe('device/command/Mumbai_Bus_Shelter', { qos: 2 }, function (err) {
    if (!err) {
      // client.publish('device/command/Mumbai_Bus_Shelter', 'play1')
    }})
})

client.on('reconnect', () => {
  console.log('Reconnecting...')
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
})


