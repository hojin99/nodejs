const dgram = require('dgram');
let server = dgram.createSocket('udp4');

server.on('listening', function() {
    console.log('udp server listening : ' + server.address().port);
});

server.on('message', function(message, remote) {
    console.log("data in : " + remote.address + ':' + remote.port + "," + message);

    server.send(message, 0, message.length, remote.port, remote.address, function (err, bytes)
    {
        if (err)
            Log.error('sending to ' + remote.address + ':' + remote.port, err);

        console.log('send back : ' + remote.address + ':' + remote.port);
    });

});

server.on('error', function(err) {
    console.log("error : " + JSON.stringify(err));
});

server.bind(10001, '127.0.0.1');