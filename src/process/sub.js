let intervalId;

let stdin = process.openStdin();

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

setInterval(() => {
    console.log('.');
},1000);
