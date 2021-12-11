const { ipcRenderer } = require("electron");

let events = ipcRenderer.sendSync("get-schedule-data", "events");
loadEvents = () => {
    for (let i = 0; i < events.length; i++) {
        events[i] = Event.createJsonEvent(events[i]);
    }
    console.log(events);
}
loadEvents()

// document.getElementById('view').onclick = (e) => {
//     // ipcRenderer.sendSync("schedule-view")
// }
