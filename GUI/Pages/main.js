// get Renderer
let { ipcRenderer } = require("electron")

// close, minimize, maximize
let min = document.getElementById("min")
let max = document.getElementById("max")
let cls = document.getElementById("close");

min.onclick = () => {ipcRenderer.send('min')};
max.onclick = () => {ipcRenderer.send('max')};
cls.onclick = () => {ipcRenderer.send('close')};

