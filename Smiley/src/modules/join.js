const modules = require("../modules.js");
let data = require("../json/data.json");
let config = require("../../data/config.json");
let voiceHandler = require("../handlers/voiceHandler");

module.exports.run = (client, message, args) => {
    voiceHandler.initiate(client, message, args);
}

module.exports.info = {
    name: "join",
    description: "Makes me join the voice channel you're in",
    aliases: [],
    category: "Misc",
    permission: "Public"
}