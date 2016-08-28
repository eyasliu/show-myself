import "babel-polyfill";
import koa from 'koa';
import compose from 'koa-compose';
import convert from 'koa-convert';
import Router from 'koa-router';
import session from 'koa-session';

import config from 'root/config';
import policies, {beforeController, afterController} from './policies';
import controllers from './controllers';

const app = new koa();

// 暴露出全局变量，方便使用
global.AppConfig = config;
global.App = app;

app.keys = ['af78sd68f7s6g6g875ds78fadsfdf76sdfg5asd6f7ds56gf7d5s7g5ds78f578asdf8asd']
app.use(compose([
	beforeController,
	convert(session(app)),
	controllers,
	afterController
]))

app.listen(config.server.port)