var gulp = require("gulp");
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");

var paths = {
    pages: ['src/**/*.html'],
    js: ['src/app/main.js','src/**/*.js'],
    vendor: ['node_modules/angular/angular.min.js','node_modules/angular-route/angular-route.min.js'],
    scss: ['src/**/*.scss'],
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("process-ts", function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: [
            'src/app/main.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
});


gulp.task("process-js", function () {
    gulp.src(paths.js, {base: './'})
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'));

    gulp.src(paths.vendor, {base: './'})
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist'));
});


gulp.task('process-scss', function () {
    gulp.src(paths.scss, {base: './'})
        .pipe(sass({style: 'expanded'}))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist'));
});



gulp.task("default", ["copy-html", "process-ts", "process-js", "process-scss"], function () {
});