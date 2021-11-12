const Discord = require("discord.js")
const { Intents } = require('discord.js');
const chalk = require("chalk")
const fs = require("fs")

let modules = require('./modules.js');
let config = require("../data/config.json")

const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

client.commands = new Map();

client.on("ready", () => {
    console.log(chalk.green(`\nLogged in as ${client.user.tag}.`))

    console.log(chalk.yellow(`Loading Modules...`));

    fs.readdir("./Smiley/src/modules/", (err, files) => {
        if(err || !files){ modules.err(err || "no modules"); return;};
        files.forEach(file => {
            if(file.endsWith(`.js`)) file = file.substr(0, file.length - 3)
            let info = require(`./modules/${file}`)
            client.commands.set(info.info.name, info);
            console.log(chalk.greenBright(`"${info.info.name}" command has been loaded.`))
        })
    });
})

client.on("messageCreate", msg => {
    if((msg.author.bot == true && msg.author.id != "286756561848762378y") || msg.content == "" || !msg.content.startsWith(config.prefix)) return;
    args = msg.content.slice(config.prefix.length).split(" ");
    console.log(args);
    if(msg.author.id !=286756561848762378 && client.commands.get(args[0]).info.permission == "Private") return;
    client.commands.get(args[0]).run(client, msg, args.slice(1))
})

client.login(config.token)