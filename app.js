const Koa = require('koa');
const koaBody = require('koa-body');
const fs = require('fs');
const config = require('config');
const path = require('path');
const koaStatic = require('koa-static');
const unzipper = require('unzipper');
const cors = require('@koa/cors');

const routerConfig = require('./router-config');
const responseMiddleware = require('./middlewares/response');

const app = new Koa();
app
  .use(koaBody())
  .use(cors({ credentials: true, maxAge: 2592000 }))
  .use(koaStatic(path.resolve(__dirname, './upload/')))
  .use(koaStatic(path.resolve(__dirname, './avator/')))
  .use(responseMiddleware.init)
  .use(routerConfig.api.routes())
  .use(routerConfig.api.allowedMethods())
  .use(redirect)

const port = config.get('port');
const host = config.get('host');
app.listen(port, host);

console.log(`server is listening http://${host}:${port}`);

function serve(prefix, filePath) {
  return staticCache(path.resolve(__dirname, filePath), {
    prefix,
    gzip: true,
    dynamic: true,
    maxAge: 60 * 60 * 24
  })
}

function redirect(ctx) {
  if (/\preview/.test(ctx.url)) {
    ctx.response.redirect(`${ctx.accept.headers.referer}${ctx.url}`);
  }
  if (/\assets/.test(ctx.url)) {
    ctx.response.redirect(`${ctx.accept.headers.referer}${ctx.url}`);
  }
}

function unzip() {
  const inputPath = path.resolve(__dirname, './upload/test.zip')
  const outputPath = path.resolve(__dirname, './upload');
  fs.createReadStream(inputPath)
  .pipe(unzipper.Extract({ path: outputPath }));
}
