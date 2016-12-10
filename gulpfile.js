var gulp = require('gulp');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var sourcemaps = require('gulp-sourcemaps');
var jslint = require('gulp-jslint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var slim = require('gulp-slim');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var connect = require('gulp-connect');
var copy = require('gulp-copy');
var del = require('del');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var coffee = require('gulp-coffee');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var mozjpeg = require('imagemin-mozjpeg')
var uncss = require('gulp-uncss');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');

gulp.task('default', ['connect', 'watch']);

// BUILD SCRIPTS

gulp.task('build-css', function() {
	return gulp.src('src/sass/main.scss')
		.pipe(plumber())
		.pipe(sass({indentedSyntax: false, errLogToConsole: true}))
		.pipe(plumber())
		.pipe(uncss({
			html: ['public/*.html'],
			ignore: [
                ".fade",
                ".fade.in",
                ".collapse",
                ".collapse.in",
                ".collapsing",
                ".alert-danger",
                /\.open/,
                /[#.]rolling-text-*[A-Za-z-0-9]*/,
           ]
		}))
		.pipe(minifyCSS({keepBreaks:false}))
		.pipe(gulp.dest('./public/css'))
		.pipe(connect.reload())
});

gulp.task('build-fonts', function() {
	return gulp.src(['lib/fontawesome/fonts/fontawesome-webfont.*','assets/fonts/*.*'])
		.pipe(copy('public/fonts/', {
			prefix: 3
		}))
});

gulp.task('build-js', function() {

	return gulp.src(['src/coffee/*.coffee'])
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(coffee({bare:true}))
		.pipe(sourcemaps.write())
		.pipe(uglify({mangle:false}))
		.pipe(gulp.dest('public/js'))

});

gulp.task('build-libs', function() {
	return gulp.src([
		'lib/modernizr/modernizr.js',
		'lib/jquery/dist/jquery.min.js',
		'lib/bootstrap-sass/assets/javascripts/bootstrap.min.js',
		'node_modules/skrollr/dist/skrollr.min.js',
		'lib/jquery.debouncedresize/js/jquery.debouncedresize.js'
		])
	.pipe(concat('libs.js'))
	.pipe(uglify({mangle:false}))
	.pipe(gulp.dest('public/js'))
})

gulp.task('build-images-png', function() {
	return gulp.src('assets/images/*.png')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant()]
		}))
		.pipe(gulp.dest('public/images/'));
})

gulp.task('build-images-jpg', function() {
	return gulp.src('assets/images/*.jpg')
		.pipe(imagemin({
			progressive: true,
			use: [mozjpeg()]
		}))
		.pipe(gulp.dest('public/images/'));
})

gulp.task('build-html', function() {
	return gulp.src('src/pug/index.pug')
		.pipe(plumber())
		.pipe(pug({
			pretty: true
		}))
		.pipe(minifyHTML())
		.pipe(gulp.dest("public/"))
		.pipe(connect.reload())
});

// UTILITY TASKS

gulp.task('watch', function() {
	gulp.watch(['./src/**/*.*'], ['public']);
})

gulp.task('connect', function() {
	connect.server({
		root: 'public',
		livereload: true
	});
})

gulp.task('clean', function() {
	console.log('Cleaning build folder...');
	del('public/**/*.*');
})

gulp.task('full-build', function(callback) {
	runSequence('clean', ['build-js', 'build-libs', 'build-images-png', 'build-images-jpg', 'build-fonts'], 'build-html', 'build-css', callback);
})

gulp.task('build', function(callback) {
	runSequence(['build-js', 'build-libs', 'build-fonts', 'build-images-jpg'], 'build-html', 'build-css', callback);
})
