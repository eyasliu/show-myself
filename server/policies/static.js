import serve from 'koa-static';
import path from 'path';

export default serve(path.resolve('build/client'))