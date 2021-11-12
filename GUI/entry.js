const { app, BrowserWindow, globalShortcut, Menu, ipcMain } = require('electron');
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
    console.log("brrr");
    win.close();
})

ipcMain.on('min', (event) => {
    console.log("brrr");
    win.minimize();
})

ipcMain.on('max', (event) => {
    console.log("brrr");
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