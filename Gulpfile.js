var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('webpack', function() {
	return gulp.src('./js/*')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('public/javascripts'));
});

gulp.task('copyjs', function () {
	// vue
	gulp.src('node_modules/vue/dist/vue.js')
		.pipe(gulp.dest('./public/javascripts/'));

	// jquery
	gulp.src('node_modules/jquery/dist/jquery.min.js')
		.pipe(gulp.dest('./public/javascripts/'));
});

gulp.task('default',function() {
	gulp.watch('sass/**/*.scss',['styles']);
	gulp.watch('vue_components/**/*.vue',['webpack']); // TODO: combine these?
	gulp.watch('js/**/*.js',['webpack']);
});