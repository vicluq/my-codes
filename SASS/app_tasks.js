const { src, dest, task } = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const uglifycss = require("gulp-uglifycss");
const minifyHTML = require("gulp-minify-html");

// HTML
function minify_html() {
  return src("./src/app/**/*.html")
    .pipe(
      minifyHTML({
        comments: false,
      })
    )
    .pipe(dest("./Build"));
}

// css
const convertToCSS = (cb) => {
  src("./src/sass/index.scss")
    .pipe(sass({ debug: true }))
    .pipe(uglifycss({ uglyComments: false }))
    .pipe(dest("./Build/css"));
  return cb();
};
const hello = 20;
console.log(hello);

// javaScript

function JS(cb) {
  src("./src/scripts/*.js")
    .pipe(babel({ comments: false, presets: ["@babel/env"] }))
    .pipe(uglify())
    .pipe(concat("index.min.js"))
    .pipe(dest("./Build/JavaScript"));

  return cb();
}

module.exports = {
  convertToCSS,
  minify_html,
  JS,
};
