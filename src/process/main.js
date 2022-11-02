const child_process = require('child_process');
const exeName = 'node';

// child process 생성
const child = child_process.spawn(exeName, ['src/process/sub.js']);

child.on('error', err => {
    console.log(`pid ${child.pid} error : ${err}`);
});

child.on('close', (code) => {
    console.log(`pid ${child.pid} exited with code ${code}`);
  });

child.on('exit', (code, signal) => {
    console.log(`pid ${child.pid} exited with code ${code}, signal ${signal}`);
});

// child process로 부터 message를 받으면, 1초 후 다시 message 전달
child.stdout.on('data', data => {
    let dataStr = data.toString();
    console.log(`pid ${child.pid} : ${dataStr}`);

    setTimeout(() => {
        child.stdin.write('test\r\n');
    },1000);
});

child.stderr.on('data', data => {
    let dataStr = data.toString();
    console.log(`pid ${child.pid} : ${dataStr}`);
});

// child process에 초기 message 전달
child.stdin.write('test\r\n');

// 10초 후 child process에 종료 메시지
setTimeout(() => {
    child.stdin.write('exit\r\n');
},10000);


