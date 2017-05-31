const electron = require('electron')

const {ipcRenderer:ipc} = electron

document.getElementById('btnStart').addEventListener('click', _ => {
    ipc.send('start')
})