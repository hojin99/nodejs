'use strict'

const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path')

const config = require('./config');
const middleware = require('./http_middleware');
const httpRoute = require('./http_route');

const port = config.port;
const use_ssl = config.use_ssl;
const app = express();

// http, https 서버 설정
let server;

if(use_ssl) {
    server = http.createServer(app);
} else {
    const options = {
        key:fs.readFileSync(path.join(__dirname,config.ssl_key)),
        cert: fs.readFileSync(path.join(__dirname,config.ssl_cert))
    };
    server = https.createServer(options, app);
}

// middleware 설정
middleware.register(app);

// Router 등록
httpRoute.register(app);

// 서비스 시작
server.listen(port, () => {
    console.log(`listening on port ${port}`);
});

