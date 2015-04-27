var gulp = require("gulp");
var paths = require("../paths");
var plumber = require("gulp-plumber");
var babel = require("gulp-babel");

gulp.task("scripts", function()
{
	return gulp.src(paths.scripts)
		.pipe(plumber())
		.pipe(babel({stage: 0}))
		.pipe(gulp.dest(paths.output + "scripts"));
});
