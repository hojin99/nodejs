const dgram = require('dgram');

let message = 'hello world';

let client = dgram.createSocket('udp4');
client.send(message, 0, message.length, 10001, '127.0.0.1', function(err, bytes) {
    if(err) throw err;

    console.log('UDP message sent');
    client.close();
})