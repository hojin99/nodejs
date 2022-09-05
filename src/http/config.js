require('dotenv').config();

function getValue(key, default_val) {
    return process.env[key]?process.env[key]:default_val;
}

module.exports = {
    port: getValue('http_port',3000),
    use_ssl: getValue('use_ssl',false),
    ssl_key: '',
    ssl_cert: '',
}