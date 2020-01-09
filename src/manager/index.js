module.exports = nats => {
    require("./commandCreate")(nats);
    require("./commandModify")(nats);
    require("./commandDelete")(nats);
    require("./commandList")(nats);
};
