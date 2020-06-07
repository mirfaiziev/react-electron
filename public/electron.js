const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev');

let win;

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        icon: __dirname + "/appicon.png"
    })

    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);


    if (isDev) {
        // Open the DevTools.
        win.webContents.openDevTools();
    }

    win.on('close', () => {
        win = null;
    })
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null ) {
        createWindow();
    }
})
