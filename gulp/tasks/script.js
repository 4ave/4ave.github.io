import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import changed from 'gulp-changed';

import path from '../path';

export const scripts = () => {
    return gulp.src(path.path.js.src)
        .pipe(changed(path.path.js.dist))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.min.js'))
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(path.path.js.dist));
}
