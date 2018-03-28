var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var compression = require('compression');
var cookieParser = require('cookie-parser');

var apiConfig = require("../../config/api-config.json");

var logger = require('../common/logger/api-logger');
logger.configure(apiConfig.loggerConfig);

var buildPath = process.cwd();
var relativePath = process.env.PROJECT_PATH;

if (relativePath) {
    buildPath = buildPath + '/' + relativePath;
}

logger.info('API Engine start - build path identified', {"buildPath": buildPath});

var app = express();

app.use(cookieParser());

app.use(compression());

logger.info('API engine start - compression middleware is loaded');

app.use(bodyParser.json({ limit: '10mb'}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

logger.info('API engine start - body parser middleware is loaded');

// register cors to allow cross domain calls
app.use(cors());

logger.info('API engine start - cors middleware is loaded');

var deviceLogRoute = require('../device-log/DeviceLogRoute');
deviceLogRoute(app);

logger.info('API engine start - device log routes are loaded');

// Start the API server...
var server = app.listen(5005, function () {
    var host = server.address().address === '::' ? 'localhost' : server.address().address;
    var port = server.address().port;

    logger.info('API engine start - API engine is started', {"host": host, "port": port});
    console.log('API engine is running now at http://%s:%s/', host, port);
});

server.timeout = apiConfig.connectionTimeout;