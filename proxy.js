const Koa = require('koa');
const proxy = require('koa2-proxy-middleware');
const bodyparser = require('koa-bodyparser');
const router = require('koa-router');
const cors = require('cors');

const app = new Koa();

app.use(cors())

app.use(proxy({
  targets: {
    // (.*) means anything
    '/api/(.*)': {
      target: 'https://community-preview.tidb.net',
      changeOrigin: true,
      pathRewrite: {
        // '/passager/xx': '/mPassenger/ee', // rewrite path
      }
    },
    '/blog/(.*)': {
      target: 'https://community-preview.tidb.net',
      // changeOrigin: true,
      origin: 'https://community-preview.tidb.net',
      pathRewrite: {
        // '/passager/xx': '/mPassenger/ee', // rewrite path
      }
    },
    // (.*) means anything
    '/(.*)': {
      target: 'https://asktug.com',
      changeOrigin: true,
      pathRewrite: {
        // '/passager/xx': '/mPassenger/ee', // rewrite path
      }
    },
  }
}));

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}));

app.use(router(app))

app.listen(3300, '0.0.0.0');
