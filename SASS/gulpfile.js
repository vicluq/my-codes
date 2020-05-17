const { series, parallel, src, dest } = require("gulp");
const { watch } = require("gulp");
const webserver = require("gulp-webserver");

const { minify_html, convertToCSS, JS } = require("./app_tasks.js");

function watchFiles(cb) {
  watch("./src/sass/**/*.scss", parallel(convertToCSS)).on(
    "change",
    (event) => {
      console.log(`file ${event} was changed`);
    }
  );

  watch("./src/app/**/*.html", parallel(minify_html)).on("change", (event) => {
    console.log(`file ${event} was changed`);
  });

  watch("./src/scripts/*.js", parallel(JS)).on("change", (event) => {
    console.log(`file ${event} was changed`);
  });

  return cb();
}
// Alternative to express livereload server
// function web_server() {
//   return src("./Build").pipe(
//     webserver({
//       port: 3003,
//       livereload: true,
//     })
//   );
// }

exports.default = series(watchFiles, web_server);

// OUTRA OPÇÃO

// const watcher = watch(
//   ["./src/sass/**/*.scss", "./src/app/**/*.html"],
//   parallel(minify_html, convertToCSS)
// );

// watcher.on("change", (event) => {
//   console.log(`file ${event} was changed`);
// });

// watcher.on("add", (event) => {
//   console.log(`file ${event} was added`);
// });

// watcher.on("remove", (event) => {
//   console.log(`file ${event} was removed`);
// });
