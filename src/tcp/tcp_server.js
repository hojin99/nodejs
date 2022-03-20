const net = require('net');

let clients = [];
// createServer(listener: socket)
let tServer = net.createServer();

// client 연결 시
tServer.on('connection', function(client) {
    console.log("#####################");
    console.log("connection client : ", client.remoteAddress, client.remotePort);

    clients.push(client);
    console.log('clients count : ', clients.length);

    client.setEncoding('utf8');

    client.on('data', function(data) {
        console.log("#####################");
        console.log('data in : ', client.remoteAddress + ':' + client.remotePort, ' : ', data.toString());
        
        client.write(data);

        // 다른 client들에 전달
        // clients.forEach((sock) => {
        //     sock.write(`${sock.remoteAddress}:${sock.remotePort} said ${data}\n`); 
        // });
    });

    client.on('close', function() {
        console.log("#####################");
        console.log('client close connection : ', client.remoteAddress + ':' + client.remotePort);
    });

    client.on('end', function() {
        console.log("#####################");
        console.log('client end connection : ', client.remoteAddress + ':' + client.remotePort);

        const index = clients.findIndex( (o) => { 
            return (o.remoteAddress===client.remoteAddress) && 
                            (o.remotePort === client.remotePort); 
        }); 
        if (index !== -1) clients.splice(index, 1); 

        console.log('clients count : ', clients.length);
    });

    client.on('error', function(err) {
        console.log('err :', client.remoteAddress + ':' + client.remotePort, ' : ', JSON.stringify(err));
    });

    client.on('timeout', function() {
        console.log('timeout : ', client.remoteAddress + ':' + client.remotePort);
    });
});

// 서버 close 시
tServer.on('close', function() {
    console.log('Server terminated');
});

// 서버 error 시
tServer.on('error', function(err) {
    console.log('Server error : ', JSON.stringify(err));
});

// 서버 listen(server port, server ip, listener)
tServer.listen(10000, function() {
    // listening 시작 시점에 호출됨 (특수한 상황이 아닌 경우 초기 한번 호출됨)
    console.log("TCP Server Listening port 10000 ...");
});