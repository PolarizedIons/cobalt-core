const log = require("../log");
const Command = require("../db/command");

module.exports = nats => {
    nats.subscribe("commandDelete", (request, reply) => {
        if (!reply || !request.id) {
            return;
        }

        log.debug(`Command Delete: ${request.id}`);

        Command.deleteOne({ _id: request.id }, err => {
            nats.publish(reply, { success: !err, data: !err });
        });
    });
};
