'use strict';
const DeviceLogController = require('./DeviceLogController');
var options = {};

const deviceLogController = new DeviceLogController(options);

var DeviceLogRouter = function (app) {
    app.get('/devicelog', async function (req, res) {
        var response = await deviceLogController.search(req);
        res.status(200).send(response);
    });
    app.post('/devicelog', async function (req, res) {
        var response = await deviceLogController.processDocument(req);
        res.status(200).send(response);
    });
};

module.exports = DeviceLogRouter;
