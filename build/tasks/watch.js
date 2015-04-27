var gulp = require("gulp");
var paths = require("../paths");

gulp.task("watch", function()
{
	gulp.watch(paths.html, ["html"]);
	gulp.watch(paths.scripts, ["scripts"]);
	gulp.watch(paths.styles, ["styles"]);
	gulp.watch(paths.public, ["public"]);
});
