import Router from 'koa-router';
import User from '../models/user';

const user = new Router({
	prefix: '/user'
});

user.get('/', (c, next) => {
	if(c.state.user){
		c.ok({
			username: 'hello'
		})
	} else {
		c.notFound('no login')
	}
})

user.get('/name/:username', async c => {
	console.log('find username: ', c.params.username);
	const theuser = await User.findByUsername(c.params.username);
	console.log('i find him:::', theuser)
	c.body = theuser;
})

user.get('/:userid', async c => {
	console.log('enter here???????????????????')
	const user = await User.findById(c.params.userid);
	if(user){
		c.body = user
	} else {
		c.notFound()
	}
})

export default user.routes();