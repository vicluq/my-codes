const {src, dest} = require('gulp');
const uglifyCSS = require('gulp-uglifycss');
const concat = require('gulp-concat');

// node_modules\font-awesome\css\font-awesome.css

function faCSS () {
    return src('./node_modules/font-awesome/css/font-awesome.css')
    .pipe(uglifyCSS({comments: true}))
    .pipe(concat('deps.min.css'))
    .pipe(dest('./Build/assets/css'))
}

function faFONTS () {
    return src('./node_modules/font-awesome/fonts/*.*')
    .pipe(dest('./Build/assets/fonts'))
}

module.exports = {
    faCSS,
    faFONTS
}