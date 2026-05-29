// mqttClient.js
import mqtt from "mqtt"
import dotenv from "dotenv"
dotenv.config()

const client = mqtt.connect(process.env.MQTT_CLIENT_URL, {
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
});

client.on("connect", () => {
  console.log("MQTT Connected");
});

client.on("error", (err) => {
  console.log("MQTT Error:", err);
});

export default client;