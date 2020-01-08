const log = require("./log");

log.info("Init db");
const db = require("./db/mongoose");

log.info("Init NATS");
const nats = require("./nats");

log.info("Init Reactor");
require("./reactor")(nats, db);

log.info("Init Manager");
require("./manager")(nats, db);
