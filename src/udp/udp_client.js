const dgram = require('dgram');
const PORT = 10001;
const HOST = '127.0.0.1';

let message = 'hello world';
let client = dgram.createSocket('udp4');
let cnt = 0;

// udp 메세지 수신
client.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    console.timeEnd('run'+cnt); // 시간 재기 종료

    // 10회 후 close
    if(cnt >= 10)
        client.close();
    else
        setTimeout(() => send(message),1000);
});

// udp 메세지 보내기
function send(message) {
    client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
        if(err) throw err;
        cnt++;
        console.log("UDP message sent" + cnt);
        console.time('run'+cnt); // 시간 재기 시작
    });
}

send(message);
