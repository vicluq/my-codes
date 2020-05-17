const gulp = require('gulp');
const series = gulp.series;
const {parallel} = require('gulp');


function taskMoveFile (callbackStop) {
    // gulp.src(['./pastaA/arquivo1.txt', './pastaA/arquivo2.txt'])
    // .pipe(gulp.dest('./dest'))
    gulp.src('./pastaA/**/*.txt').pipe(gulp.dest('./build2'))
    return callbackStop()
}


function test2 (cb) {
    console.log('gulp is awesome');
    
    const sum = 2 + 2
    console.log(sum);
    
    return cb()
}


function test1 (cb) {
    console.log('Watcha doing?');
    
    return cb()
}


module.exports.default = series(
    parallel(test1, test2), 
    taskMoveFile
                                )

