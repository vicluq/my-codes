const { parallel } = require("gulp");
const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglifycss = require("gulp-uglifycss");
const minifyHTML = require("gulp-minify-html");

function sassToCSS(cb) {
  src("./src/sass/index.scss")
    .pipe(sass())
    // .pipe(uglifycss({ uglyComments: false }))
    // .pipe(concat("estilo.min.css")) só se fosssem vários sass
    .pipe(dest("./build/css"));

  return cb();
}

function minify_HTML() {
  return src("./index.html")
    .pipe(
      minifyHTML({
        comments: false,
      })
    )
    .pipe(dest("./build"));
}

exports.default = parallel(sassToCSS);
