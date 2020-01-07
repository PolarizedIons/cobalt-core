require("dotenv").config();
const nats = require("../src/nats");

nats.publish("messageReceived", {
    channel: "#polarizedions",
    tags: {
        "badge-info": null,
        badges: { broadcaster: "1" },
        color: "#8A2BE2",
        "display-name": "PolarizedIons",
        emotes: null,
        flags: null,
        id: "714e0430-2fc3-413c-ad37-3a9d11e97975",
        mod: false,
        "room-id": "137370591",
        subscriber: false,
        "tmi-sent-ts": "1578419094311",
        turbo: false,
        "user-id": "137370591",
        "user-type": null,
        "emotes-raw": null,
        "badge-info-raw": null,
        "badges-raw": "broadcaster/1",
        username: "polarizedions",
        "message-type": "chat",
    },
    message: "!prime",
});

nats.flush(() => nats.close());
