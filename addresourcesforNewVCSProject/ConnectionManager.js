module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["TestDB"] = {
        host: process.env.EndPoint_rdsTestDB,
        port: process.env.Port_rdsTestDB,
        user: process.env.User_rdsTestDB,
        password: process.env.Password_rdsTestDB,
        database: "Test"
    };
};