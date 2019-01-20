import path from '../path';
import { watchFiles } from './watch'
import browserSync from 'browser-sync';
const server = browserSync.create();


export function reload(done) {
  server.reload();
  done();
}

export function serve(done) {
  server.init({
    server: {
      baseDir: path.path.pug.dist,
      index: "index.html"
    },
    ghostMode: false,
    tunnel: false,
    host: '0.0.0.0',
    port: 9000,
  });
  watchFiles;
  done();
}
