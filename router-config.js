const Router = require('koa-router');
const { project } = require('./controllers');

const apiRouter = new Router({ prefix: '/api' });

exports.api = apiRouter
  .post('/project', project.newAndSave)
  .get('/project', project.findAll)
  .put('/project', project.updateById)
  .delete('/project', project.deleteById)
