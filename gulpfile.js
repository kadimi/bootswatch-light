var del = require('del');
var gulp = require('gulp');
var merge = require('merge-stream');
var remoteSrc = require('gulp-remote-src');
var jscs = require('gulp-jscs');

// Run all tasks.
gulp.task('default', ['clean'], () => {
  gulp.start('bootstrap.get', 'bootswatch.get');
});

// Delete existing files
gulp.task('clean', (cb) => del('light/**', cb));

// Download Bootstrap files.
gulp.task('bootstrap.get', () => {
  var tasks = [];
  var bsBase = 'https://raw.githubusercontent.com/twbs/bootstrap/v3.3.7/';

  tasks.push = remoteSrc([
    // 'bootstrap.css',
    'bootstrap.min.css',
    'bootstrap.min.css.map',
    // 'bootstrap-theme.css',
    'bootstrap-theme.min.css',
    'bootstrap-theme.min.css.map',
  ], { base: bsBase + 'dist/css/' }).pipe(gulp.dest('light/css'));

  tasks.push = remoteSrc([
    'bootstrap.js',
    'bootstrap.min.js',
  ], { base: bsBase + 'dist/js/' }).pipe(gulp.dest('light/js'));

  tasks.push = remoteSrc([
    'glyphicons-halflings-regular.eot',
    'glyphicons-halflings-regular.svg',
    'glyphicons-halflings-regular.ttf',
    'glyphicons-halflings-regular.woff',
    'glyphicons-halflings-regular.woff2',
  ], { base: bsBase + 'fonts/' }).pipe(gulp.dest('light/fonts'));

  return merge(tasks);
});

// Download bootswatch files.
gulp.task('bootswatch.get', () => {

  var tasks = [];
  var bwBase = 'https://raw.githubusercontent.com/thomaspark/bootswatch/gh-pages/';

  [
    'cerulean',
    'cosmo',
    'cyborg',
    'darkly',
    'flatly',
    'journal',
    'lumen',
    'paper',
    'readable',
    'sandstone',
    'simplex',
    'slate',
    'solar',
    'spacelab',
    'superhero',
    'united',
    'yeti',
  ].map(function (theme) {

    tasks.push = remoteSrc([
      '_bootswatch.scss',
      '_variables.scss',
      // 'bootstrap.css',
      'bootstrap.min.css',
      'bootswatch.less',
      'variables.less',
    ], { base: `${bwBase + theme}/` }).pipe(gulp.dest(`light/${theme}`));
  });

  return merge(tasks);
});

// Check syntax.
gulp.task('jscs', () => gulp.src(['*.js', '!light/*.js'])
    .pipe(jscs())
    .pipe(jscs.reporter()
));
