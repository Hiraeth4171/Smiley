const { app, BrowserWindow, screen, ipcMain } = require("electron");
let config = require('./config.json');
let bargs;
let win;
dynamicallyCreateWindow = (type, vargs, ww, wh) => {
    const w = screen.getPrimaryDisplay().workAreaSize.width;
	const h = screen.getPrimaryDisplay().workAreaSize.height;
    switch (type) {
        case "notification":
            win = new BrowserWindow({
                height: wh,
                width: ww,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false
                },
                frame: false,
                title: 'Smiley GUI',
                alwaysOnTop: true,
                x: w - ww -20,
                y: h - wh -20,
                show: false,
                type: "toolbar",
            });
            win.loadFile('notification.html');
            break;
        case "request":
            win = new BrowserWindow({
                height: wh,
                width: ww,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false
                },
                frame: false,
                title: 'Request',
                center: true
            })
            win.loadFile('request.html');
        default:
            break;
    }
    return win;

}

ipcMain.on('notification', (event, arg) => {
    if(arg == 'close') {
        setInterval(()=>{
            app.quit(); 
            return;
        }, config.notificationTimeout)
    }
    event.returnValue = bargs;
})

ipcMain.on('request', (event, arg) => {
    event.returnValue = bargs;
})

module.exports.Notification = (args) => {
    app.whenReady().then(()=>{
        bargs = args;
        let window = dynamicallyCreateWindow("notification", args, 500, 150);
        window.show();
    })
}

module.exports.Request = (args) => {
    app.whenReady().then(()=>{
        bargs = args;
        let window = dynamicallyCreateWindow("request", args, 800, 500);
        window.show();
    })
}