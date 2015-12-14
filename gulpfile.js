var gulp = require('gulp'),
gulpLoadPlugins = require('gulp-load-plugins'),
$ = gulpLoadPlugins(),
browserSync = require('browser-sync'),
p = require('./package.json');


var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon', function (cb) {
	var called = false;
	return $.nodemon({
		script: 'app.js',
		ext: '*.js'
		})
	.on('start', function onStart() {
      // ensure start only got called once
      if (!called) { 
      	called = true;
      	cb();
      }
      })
	.on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
      	browserSync.reload({
          stream: false   //
          });
      	}, BROWSER_SYNC_RELOAD_DELAY);
      });
	});

gulp.task('browserSync', ['nodemon'], function () {
	browserSync.init({ proxy: 'http://localhost:9001', notify:false});
	});



gulp.task('sass', function (){
	return gulp.src('public/scss/**/*.scss')
	.pipe($.sourcemaps.init())
	.pipe($.sass())
	.on('error', function (err) {
		console.log(err.message);
		this.emit('end');
	})
	.pipe($.concat('style.css'))
	.pipe($.autoprefixer())
	.pipe($.sourcemaps.write())
	.pipe(gulp.dest('./public/css/'))
	.pipe(browserSync.reload({
		stream: true
		}));
	});

gulp.task('js', function () {
	return gulp.src('./public/js/*.js')
	.pipe($.sourcemaps.init())
	.pipe($.jshint())
	.pipe($.uglify())
	.pipe($.rename({
		extname: '.min.js'
		}))
	.pipe($.sourcemaps.write('.'))
	.pipe(gulp.dest('./public/js/min/'))
	.pipe(browserSync.reload({
		stream: true
		}));
	})

gulp.task('default', ['sass', 'js', 'browserSync'], function(){
	gulp.watch('public/scss/**/*.scss', ['sass']);
	gulp.watch('public/js/**/*.js', ['js']);
	gulp.watch('**/*.jade').on('change', browserSync.reload);
	});