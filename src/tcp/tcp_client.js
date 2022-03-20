const net = require('net');

let client = new net.Socket();

client.connect(10000, '127.0.0.1',() => {
    console.log('connected');
    client.write(`Hello Server : ${client.address().address}:${client.address().port}`);
});

client.on('data', function(data) {
    console.log(`receive : ${data}`);
    
    if (data.toString().endsWith('exit')) { 
        client.destroy(); 
 } 
});

client.on('close', function() {
    console.log('Connection closed!');
});

client.on('error', function(err) {
    console.log('Connection error : ' + err);
})