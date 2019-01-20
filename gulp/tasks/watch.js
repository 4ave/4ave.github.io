import gulp             from 'gulp';
import { reload }       from './server';
import { pugPage }      from './pug';
import { style }        from './scss';
import { scripts }      from './script';
import { image }        from './image';
import { icon }         from './icon';
import { font }         from './font';
import path             from '../path';

import browserSync from 'browser-sync';
const server = browserSync.create();

export const watchFiles = () => 
    gulp.watch(path.path.pug.watch, gulp.series(pugPage, reload));
    gulp.watch(path.path.scss.watch, gulp.series(style, reload));
    gulp.watch(path.path.js.watch, gulp.series(scripts, reload));
    gulp.watch(path.path.img.watch, gulp.series(image, reload));