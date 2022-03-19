const net = require('net');

let clients = [];
let tServer = net.createServer(function(client) {
    console.log("#####################");
    console.log("connection server address: ", client.localAddress);
    console.log("connection server port: ", client.localPort);
    console.log("connection client address: ", client.remoteAddress);
    console.log("connection client port: ", client.remotePort);
    console.log("client: ", JSON.stringify(client));

    clients.push({
        name: client.localPort,
        client: client
    });

    client.setEncoding('utf8');

    client.on('data', function(data) {
        console.log("#####################");
        console.log('data in : ', client.localPort, ' : ', data.toString());
        client.write('ok');
    });

    client.on('end', function() {
        console.log("#####################");
        console.log('client end connection : ', client.localPort);
        let idx = clients.indexOf({
            name: client.localPort,
            client: client
        });
        if(idx >= 0) clients.splice(idx, 1);

        console.log('clients : ', clients);
    });

    client.on('error', function(err) {
        console.log('err :', client.localPort, ' : ', JSON.stringify(err));
    });

    client.on('timeout', function() {
        console.log('timeout : ', client.localPort);
    });
});

tServer.listen(10000, function() {
    console.log("TCP Server Listening port 10000 ...");

    tServer.on('close', function() {
        console.log('Server terminated');
    });

    tServer.on('error', function(err) {
        console.log('Server error : ', JSON.stringify(err));
    });
});