const gulp = require("gulp");
const gulp_concat = require("gulp-concat");
const gulp_uglify = require("gulp-uglify");
const gulp_babel = require("gulp-babel");
const { series } = require("gulp");

function concatenar(cb) {
 return gulp
    .src("./src/**/*.js")
    .pipe(
      gulp_babel({
        comments: false,
        presets: ["env"],
      })
    )
    .pipe(gulp_uglify())
    .pipe(gulp_concat("codebuild.min.js"))
    .pipe(gulp.dest("./build"));

//    cb();
}

// gulp.task('logSum', (cb) => {
//     console.log(`2 + 2 = ${2+2}`);
//     return cb()
// })

exports.default = series(concatenar);
