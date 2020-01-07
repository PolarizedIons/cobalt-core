const mongoose = require("mongoose");

const commandSchema = new mongoose.Schema({
    name: String,
    commandType: Number,
    content: String,
    replyType: Number,
});

const Command = mongoose.model("Command", commandSchema);

module.exports = Command;
