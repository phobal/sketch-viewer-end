const Router = require('koa-router');
const { project } = require('./controllers');

const apiRouter = new Router({ prefix: '/api' });

exports.api = apiRouter
  .post('/project', project.newAndSave);
