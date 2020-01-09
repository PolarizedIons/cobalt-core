const log = require("../log");
const Command = require("../db/command");

module.exports = nats => {
    nats.subscribe("commandModify", (request, reply) => {
        if (!reply || !request._id) {
            return;
        }

        log.debug(`Command Modify: ${request._id}`);

        Command.updateOne({ _id: request._id }, request, err => {
            nats.publish(reply, { success: !err, data: err ? err : request });
        });
    });
};
