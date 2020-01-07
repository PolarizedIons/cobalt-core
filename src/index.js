console.log("init db");
const db = require("./db/mongoose");

console.log("init nats");
const nats = require("./nats");

console.log("init reactor");
require("./reactor")(nats, db);

console.log("init manager");
require("./manager")(nats, db);
