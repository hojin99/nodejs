//-------------- env, argv -----------------//
// .env를 통한 환경값
require('dotenv').config();

console.log(process.env.udr_def_path);
console.log(process.env.udr_exp_dir);
console.log(process.env.udr_exp_type);
console.log(process.env.udr_index_url);

// minimist - 인자값 자동 파싱
const args = require('minimist')(process.argv.slice(2));
console.log(args['udr_def_path']);
console.log(args['udr_exp_dir']);

// 인자값
process.argv.forEach((element,index) => {
    console.log(`${index}:${element}`);
    console.log("%d:%s", index, element);
});


