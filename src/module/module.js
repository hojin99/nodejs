
// 모듈 import
// exports는 module.exports를 참조하는 변수
// 즉, exports는 새로 할당하면 안됨 (exports = {})
// module.exports는 새로 할당 가능 (module.exports = {})

// moduel.exports
const car = require('./car');
console.log(car);
console.log(car.info.brand);
car.run();

const {info:info1,run} = require('./car');
console.log(info1.brand);
run();

// exports
const dog = require('./dog');
console.log(dog);
console.log(dog.info.name);
dog.bark();

const {info,bark} = require('./dog');
console.log(info.name);
bark();