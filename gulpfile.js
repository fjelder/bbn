const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const webpack = require("webpack");
const fileInclude = require("gulp-file-include");
const rename = require("gulp-rename");
const csso = require("gulp-csso");
const postcss = require("gulp-postcss");
const server = function (cb) {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
    notify: false, //reszta opcji z dokumentacji browsersync
    //host: "192.168.0.24",
    //port: 3000,
    open: true,
    //browser: "google chrome" //https://stackoverflow.com/questions/24686585/gulp-browser-sync-open-chrome-only
  });

  cb();
};

const css = function () {
  return (
    gulp
      .src("src/scss/style.scss")
      .pipe(sourcemaps.init()) //odpalenie sourcemap przed zabawa na plikach
      .pipe(
        sass({
          outputStyle: "expanded", //styl kodu - expanded, compressed
        }).on("error", sass.logError)
      )
      .pipe(autoprefixer()) //autoprefixy https://github.com/browserslist/browserslist#queries
      .pipe(
        rename({
          //zamieniam wynikowy plik na style.min.css
          suffix: ".min",
          basename: "style",
        })
      )
      // .pipe(csso())
      .pipe(sourcemaps.write(".")) //po modyfikacjach na plikach zapisujemy w pamięci sourcemap
      .pipe(gulp.dest("dist/css"))
      .pipe(browserSync.stream())
  );
};

const tail = function () {
  return (
    gulp
      .src("src/css/tailwind.css")
      .pipe(
        postcss([
          require("tailwindcss"),
          autoprefixer,
          require("@tailwindcss/forms"),
          require("@tailwindcss/typography"),
        ])
      )
      .pipe(
        rename({
          //zamieniam wynikowy plik na style.min.css
          suffix: ".min",
          basename: "tailwind",
        })
      )
      // .pipe(csso())
      .pipe(gulp.dest("dist/css"))
  );
};

const js = function (cb) {
  //https://github.com/webpack/docs/wiki/usage-with-gulp#normal-compilation
  return webpack(require("./webpack.config.js"), function (err, stats) {
    if (err) throw err;
    console.log(stats);
    browserSync.reload();
    cb();
  });
};

const html = function (cb) {
  return gulp
    .src("src/html/index.html")
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("dist"));
};

const htmlReload = function (cb) {
  browserSync.reload();
  cb();
};

const watch = function (cb) {
  gulp.watch("src/scss/**/*.scss", { usePolling: true }, gulp.series(css));
  gulp.watch("src/js/**/*.js", gulp.series(js));
  gulp.watch("src/html/**/*.html", gulp.series(html, htmlReload, tail));
  cb();
};

exports.default = gulp.series(css, tail, js, html, server, watch);
exports.css = css;
exports.tail = tail;
exports.html = html;
exports.watch = watch;
exports.js = js;
