import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import path from '../path';

export const image = () => {
    return gulp.src(path.path.img.src)
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: true}
                ]
            })
        ], {
            verbose: true
        }))
        .pipe(gulp.dest(path.path.img.dist))
}
