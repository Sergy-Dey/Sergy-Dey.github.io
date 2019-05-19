const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
    gulp.src('./assets/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/styles'))
})

gulp.task('watch', function(){
    gulp.watch('./assets/styles/**/*.scss', gulp.series('sass'));
})