var gulp = require('gulp'),
  changed  = require('gulp-changed')
  imagemin = require('gulp-imagemin'),
  svgo = require('gulp-svgo');

gulp.task('images', function() {
  var dest = "public/assets/images";

  return gulp.src('public/assets/images/src/**')
    .pipe(changed(dest))    // Ignore unchanged files
    .pipe(svgo())           // Optimize SVGs
    .pipe(imagemin())       // Optimize All
    .pipe(gulp.dest(dest));
});