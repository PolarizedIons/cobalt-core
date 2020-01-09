const log = require("../log");
const Command = require("../db/command");

module.exports = nats => {
    nats.subscribe("commandCreate", (request, reply) => {
        if (!reply) {
            return;
        }

        log.debug(`Command Create: ${request}`);

        Command.create(request, (err, doc) => {
            nats.publish(reply, { success: !err, data: err ? err : doc });
        });
    });
};
