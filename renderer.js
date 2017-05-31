const electron = require('electron')

const { ipcRenderer:ipc } = electron

document.getElementById('btnStart').addEventListener('click', _ => {
    ipc.send('countdown-start')
})

ipc.on('countdown-update', (evt, tick) => {
    console.log('tick', tick)
    document.getElementById('count').innerHTML = tick
})