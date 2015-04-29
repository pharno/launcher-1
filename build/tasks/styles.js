var gulp = require("gulp");
var paths = require("../paths");
var prod = require("../prod");
var plumber = require("gulp-plumber");
var gulpif = require("gulp-if");
var stylus = require("gulp-stylus");
var sourcemaps = require("gulp-sourcemaps");
var nib = require("nib");

gulp.task("styles", function()
{
	return gulp.src(paths.styles)
		.pipe(plumber())
		.pipe(gulpif(!prod, sourcemaps.init()))
		.pipe(stylus({use: [nib()], "include css": true, compress: prod}))
		.pipe(gulpif(!prod, sourcemaps.write()))
		.pipe(gulp.dest(paths.output + "styles"));
});
