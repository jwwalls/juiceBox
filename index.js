// inside index.js
const PORT = 3000;
const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./api');
const server = express();

server.use('/api', apiRouter);
server.use(morgan('dev'));
server.use(express.json())




server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});

const { client } = require('./db');
client.connect();