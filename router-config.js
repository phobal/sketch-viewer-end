const Router = require('koa-router');
const { project, upload } = require('./controllers');

const apiRouter = new Router({ prefix: '/api' });

exports.api = apiRouter
  .post('/project', project.newAndSave)
  .get('/project', project.findAll)
  .put('/project', project.updateById)
  .delete('/project', project.deleteById)
  .post('/upload', upload.uploadZip.bind(upload))
