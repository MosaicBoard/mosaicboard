const gulp  = require('gulp');
const paths = require('../paths');

module.exports = gulp.task('watch', () => {
  gulp.watch(paths.source.sass, ['sass']);
});
