module.exports = nats => {
    require("./commandList")(nats);
    require("./commandDelete")(nats);
};
