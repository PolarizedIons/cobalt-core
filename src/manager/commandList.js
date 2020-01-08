const log = require("../log");
const Command = require("../db/command");

module.exports = nats => {
    nats.subscribe("commandList", (request, reply) => {
        if (!reply) {
            return;
        }

        log.debug("Command List Requested");

        Command.find((err, res) => {
            if (err) {
                log.error("Error fetching commands:", err);
                return nats.publish(reply, { success: false, error: err });
            }

            nats.publish(reply, { success: true, data: res });
        });
    });
};
