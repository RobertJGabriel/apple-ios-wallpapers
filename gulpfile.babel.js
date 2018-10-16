import gulp from 'gulp';
import del from 'del'
import glob from 'glob';
import hash from 'hash-files'
import gulpLoadPlugins from 'gulp-load-plugins';
import sass from 'gulp-sass';
import runSequence from 'run-sequence';
import webpackStream from 'webpack-stream';
import webpack from 'webpack';
import replace from 'gulp-replace'
import jsesc from 'jsesc'
import rename from 'gulp-rename'
import {
  stream as wiredep
} from 'wiredep';



const $ = gulpLoadPlugins();

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    'app/manifest.json',
    'app/scripts/**/*.js',
    'app/images/**/*.svg',
    'app/images/**/*.webmanifest',
    'app/scripts/**/*.min.css',
    '!app/scripts.babel',
    '!app/*.html'
  ], {
    base: 'app',
    dot: true
  }).pipe(gulp.dest('docs'));
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe($.eslint(options))
      .pipe($.eslint.format());
  };
}

gulp.task('lint', lint('app/scripts.babel/**/*.js', {
  env: {
    es6: true
  },
  rules: {
    "quotes": 0
  },
  parserOptions: {
    sourceType: 'module'
  }
}));

gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
        progressive: true,
        interlaced: true,
        // Don't remove IDs from SVGs, they are often used
        // as hooks for embedding and styling
        svgoPlugins: [{
          cleanupIDs: false
        }]
      }))
      .on('error', function (err) {
        console.log(err);
        this.end();
      })))
    .pipe(gulp.dest('docs/images'));
});

gulp.task('html', () => {
  return gulp.src('app/*.html')
    .pipe($.useref({
      searchPath: ['.tmp', 'app', '.']
    }))
    .pipe($.sourcemaps.init())
    .pipe($.if('*.js', $.uglify()))
    .pipe($.sourcemaps.write())
    .pipe($.if('*.html', $.htmlmin({
      removeComments: true,
      collapseWhitespace: true
    })))
    .pipe(gulp.dest('docs'));
});


gulp.task('babel', () => {
  return gulp.src('app/scripts.babel')
    .pipe(webpackStream(require('./webpack.config.js'), webpack)
      .on('error', function (err) {
        console.log(err);
        this.emit('end');
      }))
    .pipe(gulp.dest('app/scripts/'))
});





gulp.task('watch', ['lint', 'babel'], () => {
  $.livereload.listen();

  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js',
    'app/scripts/**/*.vue',
    'app/images/**/*',
    'app/styles/**/*',
    'app/_locales/**/*.json'
  ]).on('change', $.livereload.reload);

  gulp.watch(['app/scripts.babel/**/*.js', 'app/scripts.babel/**/*.vue'], ['lint', 'babel']);
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('size', () => {
  return gulp.src('docs/**/*').pipe($.size({
    title: 'build',
    gzip: true
  }));
});

gulp.task('css', function () {
  return gulp.src('./app/styles/app/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/styles/app/'));
});



gulp.task('wiredep', () => {
  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});




var stringify = value => {
  return jsesc(value, {
    wrap: true,
    compact: false,
    indentLevel: 3
  })
}

var shortHash = files => {
  return hash
    .sync({
      files: files
    })
    .slice(0, 8)
}

var assets = ['docs/**/*.*']

gulp.task('cache', () => {
  var assets = [
    ...glob.sync('docs/scripts/**/*.*'),
    ...glob.sync('docs/scripts/**/*.min.css'),
    ...glob.sync('docs/scripts/**/*.json'),
    ...glob.sync('docs/**/*.html'),
    ...glob.sync('docs/**/*.js'),
    ...glob.sync('docs/images/**/*.svg'),
    ...glob.sync('docs/images/**/*.*')
  ]
  var assetsHash = shortHash(assets)
  var assetCacheList = [
    '/',
    ...assets
    // Remove all `images/icon-*` files except for the one used in
    // the HTML.
    .filter(
      path =>
      !path.includes('images/icon-') || path.includes('icon-228x228.png')
    )
    .map(path => path.replace(/^docs\//, '/'))
  ]

  gulp
    .src('./app/scripts.babel/sw.js')
    .pipe(replace('%HASH%', stringify(assetsHash)))
    .pipe(replace('%CACHE_LIST%', stringify(assetCacheList)))
    .pipe(
      rename(path => {
        path.basename = assetsHash
      })
    )
    .pipe(gulp.dest('docs/'))

  gulp
    .src('docs/**/*.html')
    .pipe(
      replace(
        /(<\/body>)/g,
        `<script>
				  if ('serviceWorker' in navigator) {
					  navigator.serviceWorker.register('/${assetsHash}.js');
				  }
			  </script>$1`
      )
    )
    .pipe(gulp.dest('docs/'))

  return del(['docs/service-worker.js'])
})





gulp.task('build', cb => {
  runSequence(
    'html', 'css',
    'lint', 'babel', 'images', 'extras',
    'size','cache', cb);
});












gulp.task('default', cb => {
  runSequence('build', cb);
});