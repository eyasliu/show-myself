import Router from 'koa-router';
import passport from '../services/passport';

const auth = new Router();

auth.get('/login', async function(c, next){
	c.body = c.isAuthenticated() ? 'is login now: ' + c.state.user : 'no login !!!'
})

auth.post('/login', (c, next) => (passport.authenticate('local', (user, info, status) => {
	if(user === false) {
		c.status = 401
		c.body = {
			status: 'error',
			msg: info.msg
		};
	} else {
		c.body = {
			status: 'success',
			user: user
		}
		return c.login(user);
	}
}))(c, next))

export default auth.routes();