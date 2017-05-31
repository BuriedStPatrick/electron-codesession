const electron = require('electron')
const path = require('path')
const countdown = require('./countdown')

const { app, BrowserWindow, ipcMain:ipc } = electron

const windows = []

app.on('ready', _ => {
    [1, 2, 3].forEach(_ => {

        let win = new BrowserWindow({
            height: 720,
            width: 1280
        })

        win.loadURL(`file://${__dirname}/index.html`)

        win.on('closed', _ => app.quit)

        windows.push(win)
    })
    console.log('app is ready!');

})

app.on('quit', _ => {
    mainWindow = null
    console.log('Closing')
})

ipc.on('countdown-start', _ =>{
    countdown(count => {
        windows.forEach(win => {
            win.webContents.send('countdown-update', count)
        })
    })
})