module.exports = nats => {
    nats.subscribe("message", msg => {
        console.log("[MESSAGE]", msg);

        if (msg.message.startsWith("!echo")) {
            nats.publish("reply", {
                channel: msg.channel,
                message: msg.message.substring(5),
            });
        }
    });
};
