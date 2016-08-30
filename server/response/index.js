import ok from './ok';
import notFound from './notFound';
import badRequest from './badRequest';
import forbidden from './forbidden';

export default (ctx, next) => {
	ctx.ok = ok;
	ctx.notFound = notFound;
	ctx.badRequest = badRequest;
	ctx.forbidden = forbidden;
	return next();
}