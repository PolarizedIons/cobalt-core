const fs = require("fs");
const log = require("../log");

module.exports = nats => {
    fs.readdir(__dirname, (err, files) => {
        if (err) {
            log.error("Error listing directory to register modules");
            return;
        }

        for (const file of files) {
            if (file === "index.js") {
                continue;
            }

            log.debug(`=> ${file.split(".").shift()}`);
            require(`./${file}`)(nats);
        }
    });
};
