import Router from 'koa-router';
import passport from '../services/passport';

const auth = new Router({
	prefix: ServerConfig.apiPrefix
});

auth.get('/login', async function(c, next){
	c.body = c.isAuthenticated() ? 'is login now: \n' + JSON.stringify(c.state.user, null, 4) : 'no login !!!'
})

auth.post('/login', (c, next) => (passport.authenticate('local', (user, info, status) => {
	if(user === false) {
		c.status = 401
		c.body = {
			status: 'error',
			msg: info.msg
		};
	} else {
		c.ok({
			status: 'success',
			user: user
		})
		c.login(user);
	}
}))(c, next))

auth.get('/logout', async c => {
	c.logout();
	c.ok({
		msg: 'success'
	})
})

export default auth.routes();