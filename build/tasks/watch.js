var gulp = require("gulp");
var paths = require("../paths");
var runElectron = require("gulp-run-electron");

gulp.task("watch", function()
{
	gulp.watch(paths.html, ["html", runElectron.rerun]);
	gulp.watch(paths.scripts, ["scripts", runElectron.rerun]);
	gulp.watch(paths.styles, ["styles", runElectron.rerun]);
	gulp.watch(paths.public, ["public", runElectron.rerun]);
});
