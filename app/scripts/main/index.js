import path from "path";
import app from "app";
import BrowserWindow from "browser-window";

let mainWindow = null;
app.on("ready", function()
{
	mainWindow = new BrowserWindow({
		width: 1024,
		height: 700
	});
	mainWindow.loadUrl("file://" + path.join(__dirname, "../../index.html"));
	// todo: debug
	mainWindow.openDevTools();
});
