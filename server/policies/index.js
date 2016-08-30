import compose from 'koa-compose';
import convert from 'koa-convert';
import session from 'koa-generic-session';
import bodyParser from 'koa-bodyparser';
import passport from 'koa-passport';

import sessionStore from '../services/sessionLocalStore';
import noop from './noop';
import staticServer from './static';
import log from './log';


// use before controllers
export const beforeController = compose([
	log,
	bodyParser(),
	convert(session({
		store: new sessionStore,
		prefix: 'thesid:'
	})),
	passport.initialize(),
	passport.session(),
	staticServer
])

// use after controllers
export const afterController = compose([
	
])

export default {
	beforeController,
	afterController
}