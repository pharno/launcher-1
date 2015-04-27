var gulp = require("gulp");
var paths = require("../paths");
var plumber = require("gulp-plumber");
var stylus = require("gulp-stylus");
var sourcemaps = require("gulp-sourcemaps");
var axis = require("axis");

gulp.task("styles", function()
{
	return gulp.src(paths.styles)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(stylus({use: [axis()], "include css": true}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.output + "styles"));
});
