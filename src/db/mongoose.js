const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error:"));
db.once("open", function() {
    console.log("DB connected!");
});

module.exports = db;
