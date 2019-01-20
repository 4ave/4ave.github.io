import gulp from 'gulp';

import { pugPage }      from './gulp/tasks/pug';
import { serve }        from './gulp/tasks/server';
import { fonts }        from './gulp/tasks/font';
import { style }        from './gulp/tasks/scss';
import { scripts }      from './gulp/tasks/script';
import { icon }         from './gulp/tasks/icon';
import { image }         from './gulp/tasks/image';
import { watchFiles }   from './gulp/tasks/watch';

const build = gulp.series (
    pugPage,
    icon,
    image,
    style,
    fonts,
    scripts,
    gulp.parallel (
        serve,
        watchFiles
    )
);

gulp.task('build', build);

export default build;
