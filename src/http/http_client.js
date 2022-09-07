const config = require('./config');
const axios = require('axios');

const port = config.port;

console.log(port);

axios.get(`http://localhost:${port}`)
    .then((res) => {
        console.log(res.data);
    }).catch(error => {
        console.error(error.code);
    });

axios.get(`http://localhost:${port}/hi`)
    .then((res) => {
        console.log(res.data);
    }).catch(error => {
        console.error(error.code);
    });