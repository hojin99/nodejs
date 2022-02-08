
// 모듈 import
const car = require('./module/car');
console.log(car);

console.log(require('./module/items').book);

const {book} = require('./module/items');
console.log(book);

const dog = require('./module/dog');
console.log(dog);