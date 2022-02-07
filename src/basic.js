// 인자값
process.argv.forEach((element,index) => {
    console.log(`${index}:${element}`);
    console.log("%d:%s", index, element);
});

// minimist - 인자값 자동 파싱
const args = require('minimist')(process.argv.slice(2));
console.log(args['name']);
console.log(args['age']);

// 소요시간 출력
console.time('run');
console.log('Do Something!');
console.timeEnd('run');

// stderr에 출력
console.error('error!');

// Stack Trace 출력
console.trace();





