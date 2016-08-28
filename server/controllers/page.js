import Router from 'koa-router';
import fs from 'fs';

const page = new Router();

page.get('/', async function(c, next){
	if(c.url === '/'){
		const html = await new Promise(resolve => fs.readFile('index.html', (err, file) => resolve(file)))
		c.body = html.toString().replace('{{host}}', 'http://' + AppConfig.host + ':' + AppConfig.client.port + '/static')
	}else{
		return next();
	}
})

export default page.routes();