const modules = require("../modules.js");
module.exports.run = (client, message, args) => {
    message.channel.send(eval(args.join(" ")));

}

module.exports.info = {
    name: "eval",
    description: "Annoys my owner",
    aliases: [],
    category: "Misc",
    permission: "Private"
}