const modules = require("../modules.js");
let data = require("../json/data.json");
let config = require("../../data/config.json");
let eventEmitter = require("../handlers/eventEmitter");
module.exports.run = (client, message, args) => {
    args = args.join(" ")
    args = args.split("/")
    console.log(args)
    eventEmitter.emit('request', message, args);
}

module.exports.info = {
    name: "request",
    description: "Annoys my owner",
    aliases: [],
    category: "Misc",
    permission: "Public"
}