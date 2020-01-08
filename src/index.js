const log = require("./log");

log.info("Init db");
require("./db/mongoose");

log.info("Init NATS");
const nats = require("./nats");

log.info("Init Reactor");
require("./reactor")(nats);

log.info("Init Manager");
require("./manager")(nats);
