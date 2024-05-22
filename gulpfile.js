const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');

function compileLess() {
    return gulp.src('src/styles/*.less')
        .pipe(concat('main.css'))
        .pipe(less())
        .pipe(gulp.dest('build/styles'));
}

function compileJS() {
    return gulp.src('src/js/*.js')
        .pipe(concat('bundle.js')) // Concatena todos os arquivos JavaScript em um único arquivo
        .pipe(gulp.dest('build/js'));
}

function watch() {
    gulp.watch('src/styles/*.less', compileLess);
    gulp.watch('src/js/*.js', compileJS);
}

exports.default = gulp.series(compileLess, compileJS);
exports.watch = watch;