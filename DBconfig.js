var mysql      = require('mysql');


    var connection = mysql.createConnection({
        host     : 'eu-cdbr-west-02.cleardb.net',
        user     : 'bb9d99c969f3ca',
        password : 'a42b1c4e',
        database : 'heroku_e6423c3b14e0e99'
      });

    connection.connect(function(err){
    if(!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
    }
    });
    // var connection = mysql.createConnection({
    //     host     : 'localhost',
    //     user     : 'root',
    //     password : 'ABCabc123!',
    //     database : 'mydb'
    //   });

    // connection.connect(function(err){
    // if(!err) {
    //     console.log("Database is connected");
    // } else {
    //     console.log("Error while connecting with database");
    // }
    // });

    module.exports = connection;







