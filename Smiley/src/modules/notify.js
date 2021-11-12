const modules = require("../modules.js");
let data = require("../json/data.json");
let config = require("../../data/config.json");
let eventEmitter = require("../handlers/eventEmitter");
module.exports.run = (client, message, args) => {
    args = args.slice(1).join(" ")
    args = args.split("/")
    eventEmitter.emit('notification', message, args);
    console.log(args)
}

module.exports.info = {
    name: "notify",
    description: "Annoys my owner",
    aliases: [],
    category: "Misc",
    permission: "Public"
}