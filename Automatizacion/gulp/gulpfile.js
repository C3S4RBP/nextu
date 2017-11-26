var gulp = require('gulp');
var minjs = require('gulp-uglify');

gulp.task('test', function () {
    console.log('primera tarea');
});

gulp.task('minJs', function () {
    gulp.src('./js/app.js')
        .pipe(minjs())
        .pipe(gulp.dest('./dst/js/'))
});


gulp.task('watchJS', function () {
    gulp.watch('./js/*.js', ['minJs']);
});