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
    'bootstrap.min.css',
    'bootstrap.min.css.map',
    'bootstrap-theme.min.css',
    'bootstrap-theme.min.css.map',
  ], { base: bsBase + 'dist/css/' }).pipe(gulp.dest('light/css'));

  tasks.push = remoteSrc([
    'bootstrap.js',
    'bootstrap.min.js',
  ], { base: bsBase + 'dist/js/' }).pipe(gulp.dest('light/js'));

  tasks.push = remoteSrc([
    'mixins/alerts.less',
    'mixins/background-variant.less',
    'mixins/border-radius.less',
    'mixins/buttons.less',
    'mixins/center-block.less',
    'mixins/clearfix.less',
    'mixins/forms.less',
    'mixins/gradients.less',
    'mixins/grid-framework.less',
    'mixins/grid.less',
    'mixins/hide-text.less',
    'mixins/image.less',
    'mixins/labels.less',
    'mixins/list-group.less',
    'mixins/nav-divider.less',
    'mixins/nav-vertical-align.less',
    'mixins/opacity.less',
    'mixins/pagination.less',
    'mixins/panels.less',
    'mixins/progress-bar.less',
    'mixins/reset-filter.less',
    'mixins/reset-text.less',
    'mixins/resize.less',
    'mixins/responsive-visibility.less',
    'mixins/size.less',
    'mixins/tab-focus.less',
    'mixins/table-row.less',
    'mixins/text-emphasis.less',
    'mixins/text-overflow.less',
    'mixins/vendor-prefixes.less',
    'alerts.less',
    'badges.less',
    'bootstrap.less',
    'breadcrumbs.less',
    'button-groups.less',
    'buttons.less',
    'carousel.less',
    'close.less',
    'code.less',
    'component-animations.less',
    'dropdowns.less',
    'forms.less',
    'glyphicons.less',
    'grid.less',
    'input-groups.less',
    'jumbotron.less',
    'labels.less',
    'list-group.less',
    'media.less',
    'mixins.less',
    'modals.less',
    'navbar.less',
    'navs.less',
    'normalize.less',
    'pager.less',
    'pagination.less',
    'panels.less',
    'popovers.less',
    'print.less',
    'progress-bars.less',
    'responsive-embed.less',
    'responsive-utilities.less',
    'scaffolding.less',
    'tables.less',
    'theme.less',
    'thumbnails.less',
    'tooltip.less',
    'type.less',
    'utilities.less',
    'variables.less',
    'wells.less',
  ], { base: bsBase + 'less/' }).pipe(gulp.dest('light/less'));

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
  var bwBase = 'https://raw.githubusercontent.com/thomaspark/bootswatch/347d741/';

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
