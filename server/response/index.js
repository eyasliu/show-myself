import ok from './ok';
import notFound from './notFound';
import badRequest from './badRequest';

export default (ctx, next) => {
	ctx.ok = ok;
	ctx.notFound = notFound;
	ctx.badRequest = badRequest;
	return next();
}