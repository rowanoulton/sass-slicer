'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('test', function () {
  gulp.src('test/*.scss')
    .pipe(sass({outputStyle: 'expanded', indentWidth: '4'}).on('error', sass.logError))
    .pipe(gulp.dest('test/'));
});
