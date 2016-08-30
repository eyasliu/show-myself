import compose from 'koa-compose';
import authPolicies from '../policies/auth';
import user from './user';
import page from './page';
import auth from './auth';
import cases from './cases';
import tag from './tag';

export default compose([
	page,
	auth,
	cases,
	tag,
	authPolicies,
	user
])