import compose from 'koa-compose';
import user from './user';
import page from './page';
import auth from './auth';

export default compose([
	page,
	auth,
	user
])