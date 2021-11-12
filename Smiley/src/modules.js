const fs = require("fs");
const chalk = require('chalk');

module.exports.err = (err) => {
    console.log(chalk.red(`Error:   ${err}`));
}