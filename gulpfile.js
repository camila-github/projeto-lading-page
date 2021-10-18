const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');

//HTML
gulp.task('build-html', () => {
    return gulp.src('./*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(rename('index.min.html'))
        .pipe(gulp.dest('./dist'));
});

//CSS
gulp.task('build-css', () => {
    return gulp.src('./assets/css/*.css')
    .pipe(concat("allcss.css"))
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('./dist'));
});

//SASS
gulp.task('build-sass', () => {
    return gulp.src('./assets/css/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('allscss.min.css'))
        .pipe(gulp.dest('./dist'));
});

//IMG
gulp.task("build-img", function() {
    return gulp
        .src("./assets/img/*.*")
        .pipe(gulp.dest("./dist"));
});