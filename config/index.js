import serverWebpack from './webpack.server';
import clientWebpack from './webpack.client';
import fs from 'fs';

let localConfig = {
	client: {},
	server: {}
}
try{
	localConfig = Object.assign(localConfig, JSON.parse(fs.readFileSync('config/local.json').toString()))
} catch(e){}

export default {
	host: '127.0.0.1',
	client: {
		port: 3000,
		webpack: clientWebpack,
		...localConfig.client
	},
	server: {
		port: 8000,
		webpack: serverWebpack,
		databaseUrl: "mysql://root:root@127.0.0.1:3306/show-myself",
		superUser:{
			username: "admin",
			password: "admin",
			email: "admin@local.com"
		},
		...localConfig.server
	}
}