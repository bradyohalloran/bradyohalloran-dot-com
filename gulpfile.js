var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var jslint = require('gulp-jslint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var slim = require('gulp-slim');

gulp.task('default', function() {
	// task goes here
})

gulp.task('sass', function() {
	gulp.src('./sass/main.sass')
		.pipe(sass({indentedSyntax: true}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./build/css'));
});

gulp.task('js', function() {
	gulp.src(['lib/modernizr/modernizr.js', 'lib/jquery/dist/jquery.min.js'])
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/js'))
});

gulp.task('slim', function() {
	gulp.src("slim/*.slim")
		.pipe(slim({
			pretty: true
		}))
		.pipe(gulp.dest("build/"))
})

