var gulp = require("gulp");
var paths = require("../paths");
var prod = require("../prod");
var gulpif = require("gulp-if");
var runElectron = require("gulp-run-electron");

gulp.task("run", function()
{
	return gulp.src(paths.output)
		.pipe(gulpif(!prod, runElectron()));
});
