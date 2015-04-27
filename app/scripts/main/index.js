import path from "path";
import app from "app";
import BrowserWindow from "browser-window";

let mainWindow = null;
app.on("ready", function()
{
	mainWindow = new BrowserWindow({width: 800, height: 600});
	mainWindow.loadUrl("file://" + path.join(__dirname, "../../index.html"));
});
