import path from '../path';
import gulp from 'gulp';
import pug from 'gulp-pug';
import changed from 'gulp-changed';

global.$ = {
    fs: require('fs')
};

export const pugPage = () => {
    return gulp.src(path.path.pug.src)
        .pipe(changed(path.path.pug.dist))
        .pipe(pug({
            pretty: '    ',
            locals : {
                project: JSON.parse($.fs.readFileSync('./project/project.json', 'utf8'))
            }
        }))
        .pipe(gulp.dest(path.path.pug.dist))
}
