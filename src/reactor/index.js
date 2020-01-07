const Command = require("../db/command");
const config = require("../config");

const prefixLength = config.commandPrefix.length;

const COMMAND_TYPE = {
    NORMAL: 0,
    RANDOM_CHOICE: 1,
};

const REPLY_TYPE = {
    NORMAL: 0,
    ME_RESPONSE: 1,
};

module.exports = (nats, db) => {
    nats.subscribe("messageReceived", msg => {
        console.log("[MESSAGE]", msg);

        const args = msg.message.split(" ");
        const cmd = args.shift().substring(prefixLength);

        Command.findOne({ cmd }).then(command => {
            if (!command) {
                return;
            }

            let response = command.content;
            if (command.commandType === COMMAND_TYPE.RANDOM_CHOICE) {
                const choices = command.content.split("\n");
                response = choices[Math.floor(Math.random() * choices.length)];
            }

            nats.publish(
                command.replyType === REPLY_TYPE.NORMAL
                    ? "sendMessage"
                    : "sendSpecialMessage",
                { channel: msg.channel, message: response }
            );
        });
    });
};
