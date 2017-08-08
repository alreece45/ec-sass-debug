
import path from 'path'
import url from 'url'

import { app, BrowserWindow } from 'electron'
import { enableLiveReload } from 'electron-compile'

let win

function createWindow() {

    win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // remove the window reference, when closed
    win.on('closed', () => {
        win = null
    });
}

app.on('ready', createWindow);

// Define mac specific behavior.
// 1: Stay open if all windows are closed.
// 2: Reopen window on 'activate'

if (process.platform !== "darwin") {
    app.on('window-all-closed', () => { app.quit() })
} else {
    app.on('activate', () => {
        createWindow();
    })
}