import ok from './ok';
import notFound from './notFound';

export default (ctx, next) => {
	ctx.ok = ok;
	ctx.notFound = notFound;
	return next();
}