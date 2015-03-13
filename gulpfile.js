var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var jslint = require('gulp-jslint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var slim = require('gulp-slim');
var minifyCSS = require('gulp-minify-css');
var connect = require('gulp-connect');
var del = require('del');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');

var livereload = require('gulp-livereload');

gulp.task('default', ['connect', 'watch']);

gulp.task('sass', ['clean'], function() {
	gulp.src('src/sass/main.sass')
		.pipe(plumber())
		.pipe(sass({indentedSyntax: true}))
		.pipe(sourcemaps.write())
		.pipe(minifyCSS({keepBreaks:true}))
		.pipe(gulp.dest('./build/css'));
});

gulp.task('js', ['clean'], function() {
	gulp.src(['lib/modernizr/modernizr.js', 'lib/jquery/dist/jquery.min.js'])
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/js'))
});

gulp.task('templates', ['clean'], function() {
	gulp.src('src/jade/*.jade')
		.pipe(plumber())
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest("build/"))
		.pipe(connect.reload())
});

gulp.task('watch', function() {
	gulp.watch(['./src/**/*.*'], ['build']);
})

gulp.task('connect', function() {
	connect.server({
		root: 'build',
		livereload: true
	});
})

gulp.task('clean', function() {
	console.log('Cleaning build folder...');
	del('build/**/*.*');
})

gulp.task('build', ['templates', 'sass', 'js']);



