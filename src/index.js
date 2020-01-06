require("dotenv").config();

console.log("init nats");
const nats = require("./nats");

console.log("init reactor");
require("./reactor")(nats);

console.log("init manager");
require("./manager")(nats);
