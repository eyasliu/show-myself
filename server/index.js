import "babel-polyfill";
import koa from 'koa';
import compose from 'koa-compose';
import convert from 'koa-convert';
import Router from 'koa-router';

import config from 'root/config';
import policies, {beforeController, afterController} from './policies';
import controllers from './controllers';

global.AppConfig = config;
const app = new koa();

app.use(compose([
	beforeController,
	controllers,
	afterController
]))

app.listen(config.server.port)