const info = {
    brand: 'Ford',
    model: 'Fiesta'
}

// 모듈 export
module.exports = {
    info: info,
    run: function() {console.log('car run!!!');}
}

// 아래 형식도 가능하지만 주로 위와 같이 사용
// module.exports.info = info;
// module.exports.run = function() {
//     console.log('car run!!!');
// }