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
var coffee = require('gulp-coffee');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');

gulp.task('default', ['connect', 'watch']);

// BUILD SCRIPTS

gulp.task('build-css', function() {
	return gulp.src('src/sass/main.sass')
		.pipe(plumber())
		.pipe(sass({indentedSyntax: true}))
		.pipe(sourcemaps.write())
		.pipe(minifyCSS({keepBreaks:true}))
		.pipe(gulp.dest('./build/css'))
		.pipe(connect.reload())
});

gulp.task('build-js', function() {

	return gulp.src(['src/coffee/*.coffee'])
		.pipe(coffee({bare:true}))
		.pipe(gulp.dest('build/js'))

});

gulp.task('build-libs', function() {
	return gulp.src([
		'lib/modernizr/modernizr.js', 
		'lib/jquery/dist/jquery.min.js'
		])
	.pipe(concat('libs.js'))
	//.pipe(uglify({mangle:false}))
	.pipe(gulp.dest('build/js'))
})

gulp.task('build-html', function() {
	return gulp.src('src/jade/*.jade')
		.pipe(plumber())
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest("build/"))
		.pipe(connect.reload())
});

// UTILITY TASKS

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

gulp.task('build', function(callback) {
	runSequence('clean', ['build-css', 'build-js', 'build-libs'], 'build-html', callback);
})






