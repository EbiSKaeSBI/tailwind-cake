var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var flexbugs = require('postcss-flexbugs-fixes');
var importcss = require('postcss-import');
var nano = require('cssnano');
var nest = require('postcss-nesting');
var rem = require('postcss-pxtorem');
var media = require('postcss-sort-media-queries');

gulp.task('css', function() {
    var plugins = [rem(), autoprefixer(), flexbugs(), importcss(), nano(), nest(), media()];
    return gulp.src(['src/css/output.css'])
        .pipe(sourcemaps.init())
        .pipe(postcss(plugins))
        .pipe(rename("clear.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./src/css"));
});

gulp.task('watch', function() {
    gulp.watch('./src/css/output.css', gulp.series('css'));
    gulp.watch('./src/**/*.html', gulp.series('css'));
});
