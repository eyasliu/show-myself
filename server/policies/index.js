import compose from 'koa-compose';

import staticServer from './static';
import log from './log';


// use before controllers
export const beforeController = compose([
	log,
	staticServer
])

// use after controllers
export const afterController = compose([

])

export default {
	afterController,
	beforeController
}