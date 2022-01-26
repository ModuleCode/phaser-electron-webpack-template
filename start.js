const electron = require('electron');
const path = require('path');
require('electron-reloader')(module, {});
const app = electron.app;
const BrowerWindow = electron.BrowserWindow;

app.on('ready', () => {
    var mainWindow = new BrowerWindow({
        width: 800,
        title:'PhaserGame',
        height: 600,
        autoHideMenuBar: true
    });
    mainWindow.loadFile(path.join(__dirname, '/dist/index.html'))
    // mainWindow.loadURL('http://localhost:8000/')
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})
