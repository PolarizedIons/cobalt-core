const config = require("../config");

module.exports = nats => {
    nats.subscribe("messageReceived", msg => {
        console.log("[MESSAGE]", msg);

        if (msg.message.startsWith("!echo")) {
            nats.publish("sendMessage", {
                channel: msg.channel,
                message: msg.message.substring(6),
            });
        }
    });
};
