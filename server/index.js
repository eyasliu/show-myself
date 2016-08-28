import "babel-polyfill";
import koa from 'koa';
import fs from 'fs';

import config from 'root/config';

const app = new koa();

// homepage return html
app.use(async (c, next) => {
	if(c.url === '/'){
		const html = await new Promise(resolve => fs.readFile('index.html', (err, file) => resolve(file)))
		c.body = html.toString().replace('{{host}}', 'http://' + config.host + ':' + config.client.port + '/static')
	}else{
		return next();
	}
})

app.use(async (c) => {
	c.body = 'hehe'
})

app.listen(config.server.port)