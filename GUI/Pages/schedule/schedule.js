const { ipcRenderer } = require("electron");

let jsonData = ipcRenderer.sendSync("get-schedule-data", "./Pages/schedule/data/events.json");
console.log(jsonData);