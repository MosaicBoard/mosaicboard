const gulp  = require('gulp');
const sass  = require('gulp-sass');
const paths = require('../paths');

module.exports = gulp.task('sass', () => {
  gulp.src(paths.source.files.sass)
    .pipe(sass())
    .pipe(gulp.dest(paths.build.css));
});
