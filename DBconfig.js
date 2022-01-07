var mysql      = require('mysql');

// var con = new Promise((resolve,reject) => {
//     var connection = mysql.createConnection({
//         host     : 'localhost',
//         user     : 'root',
//         password : 'ABCabc123!',
//         database : 'mydb'
//       });

//     connection.connect(function(err){
//     if(!err) {
//         resolve(connection);
//         console.log("Database is connected");
//     } else {
//         reject("Error while connecting with database");
//         console.log("Error while connecting with database");
//     }
//     });
// })
// module.exports = con;



    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'ABCabc123!',
        database : 'mydb'
      });

    connection.connect(function(err){
    if(!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
    }
    });

    module.exports = connection;







