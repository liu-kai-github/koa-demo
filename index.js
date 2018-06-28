const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

const controller = require('./controller');

app.use(bodyParser());

app.use(controller());

app.listen(8888);
console.log('Listen to 8888 ...');
