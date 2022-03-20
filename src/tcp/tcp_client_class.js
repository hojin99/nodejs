const net = require('net');

const PORT = 10000;
const HOST = '127.0.0.1';

class HjTcpClient {
    constructor(port, address) {
        this.socket = new net.Socket();
        this.address = address || HOST;
        this.port = port || PORT;
        this.init();
    }

    init() {
        this.socket.connect(this.port, this.address, () => {
            console.log(`connected : ${this.socket.address().address}:${this.socket.address().port}`);
        });

        this.socket.on('close', () => {
            console.log(`closed`);
        })
    }

    sendMessage(message) {
        return new Promise((resolve, reject) => {
            console.log(`send : ${message}`);
            this.socket.write(message);

            this.socket.on('data', (data) => {
                resolve(data);
                if(data.toString().endsWith('exit')) {
                    console.log('accept exit');
                    this.socket.destroy();
                }
            });

            this.socket.on('error', (err) => {
                reject(err);
            })
        });
    }
}

module.exports = HjTcpClient;
