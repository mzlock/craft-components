var gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  lr = require('tiny-lr'),
  server = lr();


gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('public/assets/stylesheets/src/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('public/assets/javascripts/src/**/*.js', ['scripts']);
  livereload(server);
});