const Koa = require('koa');
const config = require('config');
const routerConfig = require('./router-config');

const app = new Koa();

app
  .use(routerConfig.api.routes())
  .use(routerConfig.api.allowedMethods());

const port = config.get('port');
const host = config.get('host');
app.listen(port, host);

console.log(`server is listening http://${host}:${port}`);
