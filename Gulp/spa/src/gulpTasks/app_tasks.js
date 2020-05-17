const {src, dest} = require('gulp');
const minifyHTML = require('gulp-minify-html');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const uglifyCSS = require('gulp-uglifycss');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

function JS () {
    return src('./src/assets/js/**/*.js')
        .pipe(babel({comments: false, presets: ["env"]}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(dest('./Build/assets/js'))
}

function HTML () {
    return src('./src/paginas/*.html')
        .pipe(minifyHTML())
        .pipe(dest('./Build/paginas'))
}

function HTMLIndex () {
    return src('./src/index.html')
        .pipe(minifyHTML({comments: false}))
        .pipe(dest('./Build'))
}

function CSS () {
    return src('./src/assets/sass/index.scss')
        .pipe(sass())
        .pipe(uglifyCSS({"uglyComments": false}))
        .pipe(concat('app.min.css'))
        .pipe(dest('./Build/assets/css'))
}

function IMG () {
    return src('./src/assets/imgs/*.*')
        .pipe(dest('./Build/assets/imgs'))
}

module.exports = {
    IMG,
    JS,
    HTML,
    HTMLIndex,
    CSS,
}