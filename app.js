const electron = require('electron')
const path = require('path')

const { app, BrowserWindow } = electron

let mainWindow

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        height: 720,
        width: 1280
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`)

    mainWindow.on('closed', _ => app.quit)
})

app.on('quit', _ => {
    console.log('Closing')
})