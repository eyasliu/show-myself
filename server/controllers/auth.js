import Router from 'koa-router';
import fs from 'fs';

const auth = new Router();

auth.get('/login', async function(c, next){
	c.body = 'no login';
})

export default auth.routes();