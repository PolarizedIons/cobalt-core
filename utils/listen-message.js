require("dotenv").config();
const nats = require("../src/nats");

nats.subscribe("sendMessage", msg => {
    console.log("send message to " + msg.channel + ": " + msg.message);
});
nats.subscribe("sendSpecialMessage", msg => {
    console.log("send special message to " + msg.channel + ": " + msg.message);
});
