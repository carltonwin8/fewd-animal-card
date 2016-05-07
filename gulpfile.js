var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

browserSync.reload("styles.css")

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: "card.html"
        }
    });
    gulp.watch("*.css").on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
