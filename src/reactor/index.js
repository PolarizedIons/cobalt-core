module.exports = nats => {
    nats.subscribe("message", msg => {
        console.log("[MESSAGE]", msg);
    });
};
