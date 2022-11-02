let intervalId;

let stdin = process.openStdin();

// stdin으로 main process로 부터 데이터를 받으면 표준 출력으로 echo 메세지 출력
// exit 메세지를 받으면 종료
stdin.on('data', (chunk) => {
    let input = chunk.toString();
    input = input.substring(0,input.length-2);
    
    if(input === 'exit') {
        console.log('exit!');
        process.exit();
    } else {
        console.log(`echo - ${input}`);        
    }
});


