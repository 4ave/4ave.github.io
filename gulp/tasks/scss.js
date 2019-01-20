import path from '../path';
import gulp from 'gulp';
import sass from 'gulp-sass';
import sassUnicode from 'gulp-sass-unicode';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import changed from 'gulp-changed';

export const style = () => {
    return gulp.src(path.path.scss.src)
        .pipe(changed(path.path.scss.dist))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCss())
        .pipe(sassUnicode())
        .pipe(concat('style.min.css'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(path.path.scss.dist))
}
