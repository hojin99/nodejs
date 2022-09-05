const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

exports.register = (app) => {

    // 보안 설정
    app.use(helmet());

    // 압축
    app.use(compression());

    // Body 파서
    app.use(bodyParser.json({limit: '1mb'}));
    app.use(bodyParser.urlencoded({ extended: true }));

    // Cookie 파서
    app.use(cookieParser());

    // 로거 설정
    const logger = (req, res, next) => {
        console.log(`trace : method - ${req.method}, url - ${req.url}`);
        next();
    }
    
    app.use(logger);

}