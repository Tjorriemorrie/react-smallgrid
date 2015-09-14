'use strict';

// default
var gulp = require('gulp');
var rename = require('gulp-rename');

// one
var babel = require('gulp-babel');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');

// two
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

var DEST = 'dist/';

gulp.task('one', function () {
    return gulp.src('src/smallgrid.jsx')

        // transform jsx
        .pipe(babel())

        // This will output the non-minified version
        .pipe(gulp.dest(DEST))

        // strip out console and alerts
        .pipe(stripDebug())

        // This will minify and rename to foo.min.js
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))

        .pipe(gulp.dest(DEST));
});

gulp.task('two', ['one'], function () {
    return gulp.src('src/**/*.less')

        .pipe(less())
        .pipe(gulp.dest(DEST))

        .pipe(minifyCSS())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest(DEST))
});

gulp.task('default', ['one', 'two']);