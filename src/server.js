const node_static = require('node-static');
const http = require('http');
const path = require('path');

console.log('create server');
var file = new node_static.Server(path.resolve(__dirname, "www"));
http.createServer(function (req, res) {
    console.log(req.url);
    file.serve(req, res);
}).listen(9999);

