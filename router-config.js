const Router = require('koa-router');
const { project, upload, subproject } = require('./controllers');

const apiRouter = new Router({ prefix: '/api' });

exports.api = apiRouter
  .post('/project', project.newAndSave)
  .get('/project', project.findAll)
  .put('/project', project.updateById)
  .delete('/project', project.deleteById)
  .post('/upload', upload.uploadZip.bind(upload))
  .post('/upload/avator', upload.uploadImg)
  .post('/subproject', subproject.newAndSave)
  .get('/subproject', subproject.findAll)
  .put('/subproject', subproject.updateById)
  .delete('/subproject', subproject.deleteById)
