const child_process = require('child_process');
const exeName = 'node';

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

child.stdout.on('data', data => {
    let dataStr = data.toString();
    console.log(`pid ${child.pid} : ${dataStr}`);
});

child.stderr.on('data', data => {
    let dataStr = data.toString();
    console.log(`pid ${child.pid} : ${dataStr}`);
});

setTimeout(() => {
    child.stdin.write('test\r\n');
    child.stdin.write('exit\r\n');
    child.stdin.end();
},10000);


