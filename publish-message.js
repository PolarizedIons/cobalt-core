require("dotenv").config();
const nats = require("./src/nats");

nats.publish("message", { msg: "Hello world!" });

setTimeout(() => nats.close(), 500);
