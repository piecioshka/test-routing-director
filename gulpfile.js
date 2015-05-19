(function (root) {
    'use strict';

    var gulp = require('gulp');
    var browserify = require('gulp-browserify');
    var rename = require('gulp-rename');

    gulp.task('js', function () {
        return gulp.src('app/scripts/main.js')
            .pipe(browserify())
            .pipe(rename('bundle.js'))
            .pipe(gulp.dest('app/scripts'));
    });

    gulp.task('watch', ['js'], function () {
        gulp.watch('app/scripts/main.js', ['js']);
    });

}(this));
