const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors())

app.use('/', async (request, response) => {
const url = 'https://community-preview.tidb.net' + req.url;
// const url = 'https://tidb.net' + req.url;
  const remoteResponse = await axios.get(url)
  response
});

app.listen(3200, '0.0.0.0');
