const gulp = require('gulp');//gerenciador de tarefas
const sass = require('gulp-sass')(require('sass'));//compilador
const sourcemaps = require('gulp-sourcemaps');//mapa de origem
const uglify = require('gulp-uglify'); //minificação de arquivos js
const obfuscator = require('gulp-obfuscator');//ofuscação de arquivos js, fuica ilegivel para o navegador
const imagemin = require('gulp-imagemin'); //comprime imagens

function comprimeImagens() {
    return gulp.src('./source/images/*')// seleciona todos os arquivos .png
        .pipe(imagemin())//minifica as imagens
        .pipe(gulp.dest('./build/images'));//cria o diretorio build/images
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js') // seleciona todos os arquivos .js
        .pipe(uglify())//minifica os arquivos
        .pipe(obfuscator())//ofuscação de arquivos js, fuica ilegivel para o navegador
        .pipe(gulp.dest('./build/scripts'));//cria o diretorio build/scripts
}

function compilaSass() {
    return gulp.src('./source/styles/main.scss')// seleciona todos os arquivos .scss
        .pipe(sourcemaps.init())//inicia o mapa de origem
        .pipe(sass({
            outputStyle: 'compressed'//compacta o css
        }))
        .pipe(sourcemaps.write('./maps'))//cria o mapa de origem
        .pipe(gulp.dest('./build/styles'));//cria o diretorio build/styles
}


exports.watch = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}