var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var jslint = require('gulp-jslint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var slim = require('gulp-slim');
var minifyCSS = require('gulp-minify-css');
var connect = require('gulp-connect');
var copy = require('gulp-copy');
var del = require('del');
var plumber = require('gulp-plumber');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var uncss = require('gulp-uncss');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');

gulp.task('default', ['connect', 'watch']);

// BUILD SCRIPTS

gulp.task('build-css', function() {
	return gulp.src('src/sass/main.sass')
		.pipe(plumber())
		.pipe(sass({indentedSyntax: true}))
		.pipe(plumber())
		.pipe(uncss({
			html: ['build/*.html'],
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
		.pipe(minifyCSS({keepBreaks:true}))
		.pipe(gulp.dest('./build/css'))
		.pipe(connect.reload())
});

gulp.task('build-fonts', function() {
	return gulp.src(['lib/fontawesome/fonts/fontawesome-webfont.*'])
		.pipe(copy('build/css/fonts/', {
			prefix: 3
		}))
});

gulp.task('build-js', function() {

	return gulp.src(['src/coffee/*.coffee'])
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(coffee({bare:true}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/js'))

});

gulp.task('build-libs', function() {
	return gulp.src([
		'lib/modernizr/modernizr.js', 
		'lib/jquery/dist/jquery.min.js',
		'lib/bootstrap-sass/assets/javascripts/bootstrap.min.js',
		'lib/waypoints/lib/jquery.waypoints.js'
		])
	.pipe(concat('libs.js'))
	//.pipe(uglify({mangle:false}))
	.pipe(gulp.dest('build/js'))
})

gulp.task('build-images', function() {
	return gulp.src('assets/images/*.png')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant()]
		}))
		.pipe(gulp.dest('build/images/'));
})

gulp.task('build-html', function() {
	return gulp.src('src/jade/index.jade')
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

gulp.task('full-build', function(callback) {
	runSequence('clean', ['build-js', 'build-libs', 'build-images', 'build-fonts'], 'build-html', 'build-css', callback);
})

gulp.task('build', function(callback) {
	runSequence(['build-js', 'build-libs', 'build-fonts'], 'build-html', 'build-css', callback);
})






