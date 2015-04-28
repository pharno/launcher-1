var gulp = require("gulp");
var paths = require("../paths");
var merge = require("merge-stream");

gulp.task("public", function()
{
	var publicFiles = gulp.src(paths.public)
		.pipe(gulp.dest(paths.output));

	var other = gulp.src([
			paths.root + "package.json",
			paths.root + "node_modules/**/*"
		], {base: paths.root})
		.pipe(gulp.dest(paths.output));

	return merge(publicFiles, other);
});
