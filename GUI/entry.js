const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const { fstat } = require('original-fs');
const fs = require('fs');
let events = require("./Pages/schedule/data/events.json");
/**
 *  @type {BrowserWindow}
 */
let win;

function createWindow() {
    win = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        },
        title: 'Smiley GUI',
        frame: false,
    });

    globalShortcut.register('CommandOrControl+R', () => {
        win.reload();
    })
    globalShortcut.register('CommandOrControl+Shift+I', () => {
        win.webContents.openDevTools();
    })

    win.setMenu(null);

    win.setTitle('Smiley Hub');
    win.loadFile('index.html');
}

ipcMain.on('close', (event) => {
    win.close();
})

ipcMain.on('get-schedule-data', (event, args) => {
    event.returnValue = events;
})

// ipcMain.on('schedule-view', (event) => {
    
// })

ipcMain.on('min', (event) => {
    win.minimize();
})

ipcMain.on('max', (event) => {
    win.maximize();
})

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});