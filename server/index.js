import "babel-polyfill";
import koa from 'koa';
import compose from 'koa-compose';
import Router from 'koa-router';
import config from 'root/config';

const app = new koa();

// 暴露出全局变量，方便使用
global.AppConfig = config;
global.App = app;

const policies = require('./policies');
const {beforeController, afterController} = policies;
const controllers = require('./controllers').default;

app.keys = [
	'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVklEQVR4Xn3PgQkAMQhDUXfqTu7kTtkpd5RA8AInfArtQ2iRXFWT2QedAfttj2FsPIOE1eCOlEuoWWjgzYaB/IkeGOrxXhqB+uA9Bfcm0lAZuh+YIeAD+cAqSz4kCMUAAAAAS', 
	'vCscRCacr2Rons_ArmtnJCTKJK9e2yIgTIvUU6EPATZSQDYA5aT8z1EPcCxykCCquO3SrnqpvD4KRtSW4fHZ0Ch4Zbpp6RBHjm3_8TQrFNS27nHdfRVv_O_vCcCAFg-4'
]

app.use(compose([
	beforeController,
	controllers,
	afterController
]))

app.listen(config.server.port)