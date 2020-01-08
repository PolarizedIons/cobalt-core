const mongoose = require("mongoose");
const config = require("../config");
const log = require("../log");

mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", err => {
    log.error("DB ERROR: ", err);
});
db.once("open", function() {
    log.info("DB connected!");
});

module.exports = db;
