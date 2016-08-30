import Router from 'koa-router';
import User from '../models/user';

const user = new Router({
	prefix: ServerConfig.apiPrefix + '/user'
});

// create user
user.post('/', async (c, next) => {
	const {request: req} = c;
	const body = req.body
	try{
		const user = await User.create(body)
		c.body = user;
	} catch (err) {
		c.badRequest(err.errors);
	}
})

// get user info
user.get('/:user', async c => {
	const userinfo = await User[(parseInt(c.params.user) ? 'findById' : 'findByUsername')](c.params.user)

	if(userinfo){
		c.body = userinfo
	} else {
		c.notFound()
	}
})

// delete user
user.delete('/:userid', async c => {
	try{
		const user = await User.findById(c.params.userid)
		const result = await user.update({
			status: 'delete'
		})
		c.ok('success')
	} catch(err) {
		c.badRequest(err.errors)
	}
})

// modify user info
user.put('/:userid', async c => {
	const {body} = c.request;
	try{
		const user = await User.findById(c.params.userid)
		const result = await user.update(body)
		c.ok(result);
	} catch(e) {
		c.badRequest(e.errors)
	}
})

export default user.routes();