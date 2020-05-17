const {series} = require('gulp');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsprojeto = ts.createProject('./tsconfig.json')

function convertIntoJS (cb) {

    tsprojeto.src().pipe(tsprojeto()).pipe(gulp.dest('./bulidJS'))
    // o taskconig q usei pra criar esse proj já informa onde ficam os arquivos
    //ao executar o projeto, ele é compilado e convertido em JS
    return cb()
}

exports.default = series(convertIntoJS)