import gulp from 'gulp';
import path from '../path';

export const fonts = () => {
    return gulp.src(path.path.font.src)
        .pipe(gulp.dest(path.path.font.dist))
}