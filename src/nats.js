const NATS = require("nats");

const nats = NATS.connect({
    url: process.env.NATS_URL,
    json: true,
});

module.exports = nats;
