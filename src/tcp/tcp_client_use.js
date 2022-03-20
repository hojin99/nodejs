const HjTcpClient = require('./tcp_client_class');

const client = new HjTcpClient();

client.sendMessage('Hi')
    .then((data) => {
        console.log(`Received: ${data}`);
        return client.sendMessage('How are you');
    })
    .then((data) => {
        console.log(`Received: ${data}`);
        return client.sendMessage('Bye');
    })
    .then((data) => {
        console.log(`Received: ${data}`);
        return client.sendMessage('exit');       
    })
    .catch((err) => {
        console.error(err);
    });