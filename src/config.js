require("dotenv").config();

module.exports = {
    natsUrl: process.env.NATS_URL,
    dbUrl: process.env.DB_URL,
    commandPrefix: process.env.CMD_PREFIX,
};
