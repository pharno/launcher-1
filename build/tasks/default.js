var gulp = require("gulp");
var prod = require("../prod");

var tasks = ["build"];
if (!prod) tasks.push("watch");
gulp.task("default", tasks);
