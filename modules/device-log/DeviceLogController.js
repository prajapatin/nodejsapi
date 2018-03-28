var ElasticSearchService = require('../common/elastic-search/ElasticSearchService');

var DeviceLogController = function (options) {
    ElasticSearchService.call(this, options);
};

DeviceLogController.prototype = {
    search: async function (req) {
        var searchIndexURL = "";
        
        var searchIndexRequest = {};
       
        return await this.index(searchIndexURL, searchIndexRequest);
    },
    processDocument: async function (req) {
        var processURL = "";
      
        var result = await this.process(processURL, req.body);

        return result;
    }
};

module.exports = DeviceLogController;

