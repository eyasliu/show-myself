import serverWebpack from './webpack.server';
import clientWebpack from './webpack.client';

export default {
	host: '127.0.0.1',
	client: {
		port: 3000,
		webpack: clientWebpack
	},
	server: {
		port: 8000,
		webpack: serverWebpack
	}
}