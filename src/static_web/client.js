
const axios = require('axios');

axios.get('http://localhost:9999')
    .then((res) => {
        console.log(res);
    }).catch(error => {
        console.error(error.code);
    });