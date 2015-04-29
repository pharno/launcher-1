var gulp = require("gulp");
var paths = require("../paths");
var prod = require("../prod");
var plumber = require("gulp-plumber");
var gulpif = require("gulp-if");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");

gulp.task("scripts", function()
{
	return gulp.src(paths.scripts)
		.pipe(plumber())
		.pipe(gulpif(!prod, sourcemaps.init()))
		.pipe(babel({stage: 0}))
		.pipe(gulpif(!prod, sourcemaps.write()))
		.pipe(gulp.dest(paths.output + "scripts"));
});
