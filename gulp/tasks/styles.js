var gulp = require('gulp'),
  compass = require('gulp-compass'),
  gutil = require('gulp-util'),
  livereload = require('gulp-livereload'),
  lr = require('tiny-lr'),
  cmq = require('gulp-combine-media-queries'),
  minifycss = require('gulp-minify-css'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename'),
  server = lr();


gulp.task('styles', function() {
  return gulp.src('public/assets/stylesheets/src/*.scss')
    .pipe(compass({
            css: 'public/assets/stylesheets',
            sass: 'public/assets/stylesheets/src',
            image: 'public/assets/images',
            font: 'public/assets/fonts',
            bundle_exec: true,
            require: ['breakpoint', 'compass-normalize', 'compass-flexbox']
        }))
        .on('error', gutil.log)
        .pipe(cmq({ log: true }))
        .pipe(gulp.dest( 'public/assets/stylesheets' ))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest( 'public/assets/stylesheets' ))
    .pipe(livereload())
    .pipe(notify({ message: 'Styles compiled' }));
});