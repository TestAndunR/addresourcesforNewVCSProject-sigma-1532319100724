let AWS = require('aws-sdk');
let SL_TWITTER = require('slappforge-sdk-twitter');
let twitterClients = require('./TwitterClients');
const twitter = new SL_TWITTER.TwitterP(twitterClients);
let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function (event, context, callback) {

    // You must always end/destroy the DB connection after it's used
    rds.beginTransaction({
        instanceIdentifier: 'TestDB'
    }, function (error, connection) {
        if (error) {
            throw error;
        }
    });
    twitter.postTweet({
        "status": "Helloooo",
        "clientName": "twClient"
    }).then(response => {
        let data = response.data;
    }).catch(err => {
        console.log(err);
    });
    twitter.postTweet({
        "status": "blah blaah blaaaah",
        "clientName": "twClient"
    }).then(response => {
        let data = response.data;
    }).catch(err => {
        console.log(err);
    });

    callback(null, 'Successfully executed');
}