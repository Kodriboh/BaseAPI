'use strict';

import * as http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(3000);