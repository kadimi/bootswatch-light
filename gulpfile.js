var del = require('del');
var gulp = require('gulp');
var merge = require('merge-stream');
var remoteSrc = require('gulp-remote-src');
var jscs = require('gulp-jscs');

// Run all tasks.
gulp.task('default', ['clean'], () => {
  gulp.start('bootstrap-4.get', 'bootswatch-4.get', 'bootstrap-3.get', 'bootswatch-3.get');
});

// Delete existing files
gulp.task('clean', (cb) => del('light/**', cb));

// Download Bootstrap 4 files.
gulp.task('bootstrap-4.get', () => {
  var tasks = [];
  var bsBase = 'https://raw.githubusercontent.com/twbs/bootstrap/v4-dev/';

  // List generated with `find dist/css -type f`.
  tasks.push = remoteSrc([
    'bootstrap-grid.min.css.map',
    'bootstrap.min.css',
    'bootstrap.min.css.map',
    'bootstrap.css',
    'bootstrap-grid.css',
    'bootstrap-grid.css.map',
    'bootstrap-reboot.min.css.map',
    'bootstrap-reboot.css',
    'bootstrap-reboot.min.css',
    'bootstrap-reboot.css.map',
    'bootstrap-grid.min.css',
    'bootstrap.css.map',
  ], { base: bsBase + 'dist/css/' }).pipe(gulp.dest('light/4/_css'));

  // List generated with `find dist/js -type f`.
  tasks.push = remoteSrc([
    'bootstrap.js',
    'bootstrap.bundle.min.js.map',
    'bootstrap.min.js',
    'bootstrap.bundle.js',
    'bootstrap.bundle.js.map',
    'bootstrap.min.js.map',
    'bootstrap.bundle.min.js',
    'bootstrap.js.map',
  ], { base: bsBase + 'dist/js/' }).pipe(gulp.dest('light/4/_js'));

  // List generated with `find scss -type f`.
  tasks.push = remoteSrc([
    '_modal.scss',
    '_popover.scss',
    '_pagination.scss',
    '_button-group.scss',
    '_tooltip.scss',
    '_navbar.scss',
    '_card.scss',
    '_breadcrumb.scss',
    '_mixins.scss',
    '_badge.scss',
    '_type.scss',
    '_list-group.scss',
    '_media.scss',
    '_carousel.scss',
    '_alert.scss',
    '_forms.scss',
    '_input-group.scss',
    'bootstrap.scss',
    'utilities/_display.scss',
    'utilities/_screenreaders.scss',
    'utilities/_spacing.scss',
    'utilities/_borders.scss',
    'utilities/_position.scss',
    'utilities/_visibility.scss',
    'utilities/_sizing.scss',
    'utilities/_clearfix.scss',
    'utilities/_align.scss',
    'utilities/_flex.scss',
    'utilities/_text.scss',
    'utilities/_background.scss',
    'utilities/_embed.scss',
    'utilities/_float.scss',
    '_progress.scss',
    '_grid.scss',
    'mixins/_text-emphasis.scss',
    'mixins/_border-radius.scss',
    'mixins/_text-truncate.scss',
    'mixins/_pagination.scss',
    'mixins/_breakpoints.scss',
    'mixins/_reset-text.scss',
    'mixins/_visibility.scss',
    'mixins/_navbar-align.scss',
    'mixins/_badge.scss',
    'mixins/_list-group.scss',
    'mixins/_image.scss',
    'mixins/_alert.scss',
    'mixins/_resize.scss',
    'mixins/_hover.scss',
    'mixins/_forms.scss',
    'mixins/_table-row.scss',
    'mixins/_text-hide.scss',
    'mixins/_grid.scss',
    'mixins/_transition.scss',
    'mixins/_gradients.scss',
    'mixins/_nav-divider.scss',
    'mixins/_clearfix.scss',
    'mixins/_size.scss',
    'mixins/_caret.scss',
    'mixins/_buttons.scss',
    'mixins/_grid-framework.scss',
    'mixins/_box-shadow.scss',
    'mixins/_lists.scss',
    'mixins/_background-variant.scss',
    'mixins/_screen-reader.scss',
    'mixins/_float.scss',
    '_close.scss',
    '_utilities.scss',
    '_dropdown.scss',
    '_nav.scss',
    '_variables.scss',
    'bootstrap-grid.scss',
    '_custom-forms.scss',
    '_root.scss',
    '_buttons.scss',
    '_functions.scss',
    '_tables.scss',
    '_print.scss',
    '_code.scss',
    '_jumbotron.scss',
    '_transitions.scss',
    '_images.scss',
    '_reboot.scss',
    'bootstrap-reboot.scss',
  ], { base: bsBase + 'scss/' }).pipe(gulp.dest('light/4/_scss'));

  return merge(tasks);
});

// Download Bootstrap 3 files.
gulp.task('bootstrap-3.get', () => {
  var tasks = [];
  var bsBase = 'https://raw.githubusercontent.com/twbs/bootstrap/v3.3.7/';

  // List generated with `find dist/css -type f`.
  tasks.push = remoteSrc([
    'bootstrap.min.css',
    'bootstrap.min.css.map',
    'bootstrap-theme.css',
    'bootstrap.css',
    'bootstrap-theme.min.css.map',
    'bootstrap-theme.css.map',
    'bootstrap-theme.min.css',
    'bootstrap.css.map',
  ], { base: bsBase + 'dist/css/' }).pipe(gulp.dest('light/3/_css'));

  // List generated with `find dist/js -type f`.
  tasks.push = remoteSrc([
    'bootstrap.js',
    'bootstrap.min.js',
  ], { base: bsBase + 'dist/js/' }).pipe(gulp.dest('light/3/_js'));

  // List generated with `find less -type f`.
  tasks.push = remoteSrc([
    'responsive-utilities.less',
    'wells.less',
    'utilities.less',
    'labels.less',
    'navbar.less',
    'jumbotron.less',
    'pagination.less',
    'responsive-embed.less',
    'list-group.less',
    'carousel.less',
    'close.less',
    'buttons.less',
    'variables.less',
    'tooltip.less',
    'bootstrap.less',
    'print.less',
    'media.less',
    'forms.less',
    'badges.less',
    'dropdowns.less',
    'glyphicons.less',
    'panels.less',
    'component-animations.less',
    'pager.less',
    'breadcrumbs.less',
    'theme.less',
    'mixins/center-block.less',
    'mixins/opacity.less',
    'mixins/clearfix.less',
    'mixins/reset-filter.less',
    'mixins/nav-vertical-align.less',
    'mixins/progress-bar.less',
    'mixins/vendor-prefixes.less',
    'mixins/labels.less',
    'mixins/gradients.less',
    'mixins/pagination.less',
    'mixins/list-group.less',
    'mixins/buttons.less',
    'mixins/responsive-visibility.less',
    'mixins/table-row.less',
    'mixins/resize.less',
    'mixins/forms.less',
    'mixins/hide-text.less',
    'mixins/reset-text.less',
    'mixins/grid-framework.less',
    'mixins/panels.less',
    'mixins/nav-divider.less',
    'mixins/border-radius.less',
    'mixins/tab-focus.less',
    'mixins/alerts.less',
    'mixins/size.less',
    'mixins/image.less',
    'mixins/text-overflow.less',
    'mixins/background-variant.less',
    'mixins/text-emphasis.less',
    'mixins/grid.less',
    'popovers.less',
    'scaffolding.less',
    'normalize.less',
    'tables.less',
    'progress-bars.less',
    'navs.less',
    'type.less',
    'alerts.less',
    '.csslintrc',
    'mixins.less',
    'input-groups.less',
    '.csscomb.json',
    'button-groups.less',
    'code.less',
    'modals.less',
    'thumbnails.less',
    'grid.less',
  ], { base: bsBase + 'less/' }).pipe(gulp.dest('light/3/_less'));

  // List generated with `find fonts -type f`.
  tasks.push = remoteSrc([
    'glyphicons-halflings-regular.ttf',
    'glyphicons-halflings-regular.eot',
    'glyphicons-halflings-regular.svg',
    'glyphicons-halflings-regular.woff',
    'glyphicons-halflings-regular.woff2',
  ], { base: bsBase + 'fonts/' }).pipe(gulp.dest('light/3/_fonts'));

  return merge(tasks);
});

// Download bootswatch 3 files.
gulp.task('bootswatch-3.get', () => {

  var tasks = [];
  var bwBase = 'https://raw.githubusercontent.com/thomaspark/bootswatch/5b09ba4/';

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

    // List generated with `find . | grep -E "\.css|\.less|\.scss"`
    tasks.push = remoteSrc([
      'variables.less',
      'bootstrap.min.css',
      'bootstrap.css',
      '_bootswatch.scss',
      'bootswatch.less',
      '_variables.scss',
    ], { base: `${bwBase + theme}/` }).pipe(gulp.dest(`light/3/${theme}`));
  });

  return merge(tasks);
});


// Download bootswatch 3 files.
gulp.task('bootswatch-4.get', () => {

  var tasks = [];
  var bwBase = 'https://raw.githubusercontent.com/thomaspark/bootswatch/master/dist/';

  [
    'cerulean',
    'cosmo',
    'cyborg',
    'darkly',
    'flatly',
    'journal',
    'litera',
    'lumen',
    'lux',
    'materia',
    'minty',
    'pulse',
    'sandstone',
    'simplex',
    'sketchy',
    'slate',
    'solar',
    'spacelab',
    'superhero',
    'united',
    'yeti',
  ].map(function (theme) {

    // List generated with `find . | grep -E "\.css|\.scss"`
    tasks.push = remoteSrc([
      'bootstrap.min.css',
      'bootstrap.css',
      '_bootswatch.scss',
      '_variables.scss',
    ], { base: `${bwBase + theme}/` }).pipe(gulp.dest(`light/4/${theme}`));
  });

  return merge(tasks);
});

// Check syntax.
gulp.task('jscs', () => gulp.src(['*.js', '!light/*.js'])
    .pipe(jscs())
    .pipe(jscs.reporter()
));
