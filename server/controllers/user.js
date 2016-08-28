import Router from 'koa-router';

const user = new Router({
	prefix: '/user'
});

user.get('/', function(c, next){
	c.body = 'is user'
})

export default user.routes();