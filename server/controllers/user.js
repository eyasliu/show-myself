import Router from 'koa-router';

const user = new Router({
	prefix: '/user'
});

user.get('/', function(c, next){
	if(c.state.user){
		c.ok({
			username: 'hello'
		})
	} else {
		c.notFound('no login')
	}
})

export default user.routes();