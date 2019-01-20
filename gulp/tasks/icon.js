import gulp from 'gulp';
import iconfont from 'gulp-iconfont';
import iconfontCss from 'gulp-iconfont-css';
import plumber from 'gulp-plumber';
import changed from 'gulp-changed';
import path from '../path';

const fontName = 'icons';
const fontClass = 'icon';

export const icon = () => {
    return gulp.src(path.path.icon.src)
        .pipe(changed(path.path.icon.dist))
        .pipe(plumber())
        .pipe(iconfontCss({
            cssClass: fontClass,
            fontName: fontName,
            targetPath: path.path.icon.targetPath,
            fontPath: path.path.icon.fontPath
        }))
        .pipe(iconfont({
          fontName: fontName,
          formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
          normalize: true,
          autohint: false,
          fontHeight: 1001
        }))
        .pipe(gulp.dest(path.path.icon.dist))
}
