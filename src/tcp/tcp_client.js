const net = require('net');

let client = net.connect(10000, '127.0.0.1', function() {
    console.log('connected');
    client.write('Hello Server');
})

client.on('data', function(data) {
    console.log('receive : ', data.toString());
    client.destroy();
});

client.on('close', function() {
    console.log('Connection closed!');
})