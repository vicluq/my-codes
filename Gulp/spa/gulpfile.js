const { series, parallel } = require('gulp');
const {src, dest, watch} = require('gulp');
const webServer = require('gulp-webserver');


const { IMG, JS, HTML, HTMLIndex, CSS } = require('./src/gulpTasks/app_tasks.js');
const { faCSS, faFONTS } = require('./src/gulpTasks/deps_tasks.js');
// const {  } = require('./src/gulpTasks/server_tasks.js');

function webserver () { 
    return src('./Build').pipe(webServer({
        port: 6060,
        livereload: true,
        open: true,
    }))
}


function watchFiles (cb) {

    watch('./src/assets/sass/*.scss', series(CSS))
    watch('./src/assets/js/**/*.js',series(JS))
    watch('./src/**/*.html', series(parallel(HTML, HTMLIndex)))
    watch('./src/assets/imgs/*.*', series(IMG))
    
    return cb()
}


module.exports.default = series(watchFiles, webserver)