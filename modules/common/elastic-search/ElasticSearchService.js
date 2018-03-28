'use strict';

const config = require('./elastic-search-config.json');
     

var ElasticSearchService = function (options) {
  
    this.index = async function (url, req) {
        return {"content": "test"}; 
    };

    this.process = async function (url, reqBody) {
        return {"result": reqBody} 
    };
};

module.exports = ElasticSearchService;








