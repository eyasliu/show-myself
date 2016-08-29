import compose from 'koa-compose';
import user from './user';
import page from './page';
import auth from './auth';
import cases from './cases';

export default compose([
	page,
	auth,
	user,
	cases
])