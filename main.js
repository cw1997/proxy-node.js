const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();

app.use(cors())

app.use('/', function(req, res) {
// const url = 'https://community-preview.tidb.net' + req.url;
const url = 'https://asktug.com' + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(process.env.PORT || 3100, '0.0.0.0');
