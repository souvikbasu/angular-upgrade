var gulp = require("gulp");
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var paths = {
    scss: ['src/**/*.scss']
};

gulp.task('process-scss', function () {
    gulp.src(paths.scss, {base: './'})
        .pipe(sass({style: 'expanded'}))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task("default", ["process-scss"], function () {
});