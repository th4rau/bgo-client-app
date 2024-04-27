const {app, BrowserWindow,Notification} = require('electron')
const path = require('path')
let bgw;

function ihatehowelectronworks() {
    tempw = new BrowserWindow({
        autoHideMenuBar: true,
        icon: path.join(__dirname, 'assets/favicon.ico'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            devTools: !app.isPackaged,
        }
    });

    tempw.loadURL('https://www.boardgame-online.com')
        .then(() => {tempw.maximize(), tempw.show(); })
    return tempw
}

app.whenReady().then(() => {
    bgw = ihatehowelectronworks(); 
    bgw.webContents.setWindowOpenHandler((details) => {
        bgw.loadURL(details.url) //just make so joining games or making games doesn't make a new window
        
        return { action: 'deny' }
      });
})
