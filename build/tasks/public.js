var gulp = require("gulp");
var paths = require("../paths");

gulp.task("public", function()
{
	return gulp.src([
			paths.public,
			paths.root + "package.json",
			paths.root + "node_modules/**/*"
		], {base: paths.root})
		.pipe(gulp.dest(paths.output));
});
