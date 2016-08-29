import Router from 'koa-router';
import User from '../models/user';

const user = new Router({
	prefix: '/user'
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
user.get('/:userid', async c => {
	const user = await User.findById(c.params.userid);

	if(user){
		c.body = user
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