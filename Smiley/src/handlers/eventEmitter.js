const { exec } = require('child_process');

module.exports.emit = (type, msg, args) => {
    exec(`electron ./GUI/eventHandler.js ${type} ${args[0]} ${args[1]}`, (err, stdout, stderr)=> {
        err ? msg.channel.send("Notification not up Hiraeth stinks. "+ err) : msg.channel.send("Notification up.")
    })
}

