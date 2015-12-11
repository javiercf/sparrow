var gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'),
	$ = gulpLoadPlugins(),
	browserSync = require('browser-sync'),
	p = require('./package.json');


gulp.task('start', function () {
  $.nodemon({ script: 'app.js', ext: 'js html scss', env: { 'NODE_ENV': 'development' }})
})

gulp.task('browserSync', function() {
  browserSync({
    proxy: 'http://localhost:9001',
    notify: false
  })
});

gulp.task('sass', function (){
	return gulp.src('public/scss/**/*.scss')
	.pipe($.sourcemaps.init())
	.pipe($.sass())
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

gulp.task('default', ['sass', 'js', 'start', 'browserSync'], function(){
	gulp.watch('public/scss/**/*.scss', ['sass']);
	gulp.watch('public/js/**/*.js', ['js']);
	gulp.watch('**/*.jade').on('change', browserSync.reload);
});