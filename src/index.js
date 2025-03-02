const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
	const window = new BrowserWindow({
		width: 480,
		height: 700,
		title: "Calculator",
		resizable: false,
	});
	window.setMenuBarVisibility(false);
	window.loadFile("src/index.html");
};

app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => app.quit());
