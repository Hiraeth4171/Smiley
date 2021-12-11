let args = process.argv.slice(2);
let front = require('./dynamicEntry.js');
// let fs = require('fs');

// process input
switch (args[0]) {
    case "notification":
        front.Notification(args);
        break;
    
    case "request":
        front.Request(args);
        break;
        
    default:
        break;
}
// electron eventHandler.js notification "title" "content"