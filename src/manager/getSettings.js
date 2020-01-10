const config = require("../config");
const log = require("../log");

module.exports = nats => {
    nats.subscribe("getSetings", (request, reply) => {
        if (!reply) {
            return;
        }

        log.debug("Settings Requested");

        nats.publish(reply, {
            prefix: config.commandPrefix,
        });
    });
};
