const Koa = require('koa');
const axios = require("axios");
const cors = require("@koa/cors");

const app = new Koa();

app.use(cors())

// logger

// app.use(async (ctx, next) => {
//   await next();
//   const rt = ctx.response.get('X-Response-Time');
//   console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });
//
// // x-response-time
//
// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// response

const baseUrlCommunity = 'https://community-preview.tidb.net'
const baseUrlAsktug = 'https://asktug.com'

app.use(async (ctx) => {
  const requestUrl = ctx.request.url
  let baseUrl = ''
  if (requestUrl.startsWith('/api') || requestUrl.startsWith('/next-api') || requestUrl.startsWith('/blog')) {
    baseUrl = baseUrlCommunity
  } else {
    baseUrl = baseUrlAsktug
  }
  const url = baseUrl + requestUrl
  console.log({requestUrl, url})
  const data = await axios.get(url)
  console.log({data})
  ctx.body = data.data
});

app.listen(3300);
