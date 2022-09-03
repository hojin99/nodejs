exports.info = {
    name:'pudool',
    age:7
}

exports.bark = function () {
    console.log('bark! bark!');
}

// 아래와 같이 사용은 안됨
// exports는 module.exports의 참조이기 때문에, 여전히, module.exports는 {}
// exports = {
//     info : {
//         name:'pudool',
//         age:7
//     },
//     bark : function () {
//         console.log('bark! bark!');
//     }
// }
