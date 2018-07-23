let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function(event, context, callback) {
 
    // You must always end/destroy the DB connection after it's used
    rds.beginTransaction({
        instanceIdentifier: 'TestDB'
    },function (error,connection) {
        if (error) {
            throw error;
        }
    });
    
    callback(null,'Successfully executed');
}