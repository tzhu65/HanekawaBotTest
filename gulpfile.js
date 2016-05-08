/*
  gulpfile.js
    Entry point for gulp tasks.

  Tasks:
    lintjs - javascript linter
*/

var gulp = require('gulp');
var lintjs = require('./tasks/jslint');

gulp.task('default', ['lintjs']);
