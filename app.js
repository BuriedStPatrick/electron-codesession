const electron = require('electron')
const path = require('path')
const countdown = require('./countdown')

const { app, BrowserWindow, ipcMain:ipc } = electron

let mainWindow

app.on('ready', _ => {

    console.log('app is ready!');

    mainWindow = new BrowserWindow({
        height: 720,
        width: 1280
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`)

    mainWindow.on('closed', _ => app.quit)
})

app.on('quit', _ => {
    mainWindow = null
    console.log('Closing')
})

ipc.on('countdown-start', _ =>{
    countdown(count => {
        mainWindow.webContents.send('countdown-update', count)
    })
})