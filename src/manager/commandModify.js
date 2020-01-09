const log = require("../log");
const Command = require("../db/command");

module.exports = nats => {
    nats.subscribe("commandModify", (request, reply) => {
        if (!reply || !request.id) {
            return;
        }

        log.debug(`Command Modify: ${request}`);

        Command.updateOne({ _id: request.id }, request, err => {
            nats.publish(reply, { success: !err, data: err ? err : request });
        });
    });
};
