var gulp = require('gulp'),
  browserify = require('browserify'),
  concat = require('gulp-concat'),
  gStreamify = require('gulp-streamify'),
  gutil = require('gulp-util'),
  jquery = require('jquery'),
  livereload = require('gulp-livereload'),
  lr = require('tiny-lr'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename'),
  source = require('vinyl-source-stream'),
  uglify = require('gulp-uglify'),
  server = lr();


gulp.task('scripts', function() {
  browserify({
    entries: ['./public/assets/javascripts/src/application.js'],
    extensions: ['.js', '.hbs']
  })
  .bundle({debug: true})
  .on('error', notify.onError({
    message: "There has been an error",
    title: "JavaScript Error"
  }))
  .pipe(source('browserified.js'))
  // .pipe( gStreamify( uglify({outSourceMap: true}) ))
  .pipe(gulp.dest('public/assets/javascripts'))
  .pipe(livereload())
  .pipe(notify({ message: 'Scripts compiled' }));
});