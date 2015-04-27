var gulp = require("gulp");

var tasks = ["build"];
if (process.argv.indexOf("--prod") === -1) tasks.push("watch");
gulp.task("default", tasks);
