const NATS = require("nats");
const config = require("./config");

const nats = NATS.connect({
    url: config.natsUrl,
    json: true,
});

nats.on("error", function(err) {
    console.log("NATS ERROR", err);
});

nats.on("connect", function(nc) {
    console.log("NATS connected");
});

nats.on("disconnect", function() {
    console.log("NATS disconnect");
});

nats.on("reconnecting", function() {
    console.log("NATS reconnecting");
});

nats.on("reconnect", function(nc) {
    console.log("NATS reconnect");
});

nats.on("close", function() {
    console.log("NATS close");
});

nats.on("permission_error", function(err) {
    console.error("NATS got a permissions error", err.message);
});

module.exports = nats;
