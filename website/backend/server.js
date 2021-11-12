const express = require('express');
let server = express();
const port = 80;
const path = require('path')

server.use('/static', express.static(path.join(__dirname, 'frontend')));
server.listen(port);