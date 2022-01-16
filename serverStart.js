var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var nodemailer = require('nodemailer');
const bp = require('body-parser');
const lib = require("./sendMailModule");
var jsonParser = bp.json();
app.use(bp.urlencoded({ extended: true }));
app.use(jsonParser);

/** DATA BASE  */
var connection = require('./DBconfig.js');

const encryption = require("./encryption");





//import { sendMailToUser } from "./sendMailModule.js";

app.use(express.static(__dirname));
console.log(__dirname);
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '../../HomePage/HomePage.html'));
// })

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/LoginPage.html'));
})

app.get('/signUpPage', function (req, res) {
    res.sendFile(path.join(__dirname + '/SignUpPage.html'));
    if(req == 'contactUsPage'){
        res.sendFile(path.join(__dirname + '/ContactUsPage.html'));
    }
})

app.get('/contactUsPage', function (req, res) {
    res.sendFile(path.join(__dirname + '/ContactUsPage.html'));
})

app.get('/ForgotPassword', function (req, res) {
    res.sendFile(path.join(__dirname + '/ForgotPassword.html'));
})




app.get('/dashboard', function (req, res) {
    res.sendFile(path.join(__dirname + '/dashboard.html'));
})

// var dataToSend = [["Moshe","Cohen","22","moshe@gmail.com"],["david","Cohen","26","david@gmail.com"],["Moshe","adas","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"]];
app.post('/dashboard',jsonParser, async function (req, resul) {
    connection.query("SELECT * FROM mydb.treatments", function (err, result, fields) {
        resul.send(result);
    });
});

app.post('/dashboard_delete',jsonParser, async function (req, resul) {
    var treatmentNum = req.body.treatmentNum;
    console.log(treatmentNum);
    connection.query("DELETE FROM mydb.treatments WHERE treatmentNum = ?",treatmentNum , function (err, result, fields) {
        console.log("dashboard_delete<<<<");
    });
});


app.post('/dashboard_insert', async function (req, resul) {
    var treatmentNum;
    var treatmentInfo = req.body.treatmentInfo;
    var date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    var workerEmail = req.body.workerEmail;
    var carNum = req.body.carNum;

    connection.query("SELECT max(treatmentNum) AS maxKey FROM mydb.treatments", function (err, result, fields) {
        try{ 
            if (err || result == "" ) throw err;
            else{
                treatmentNum = (result[0].maxKey) + 1;
                console.log(treatmentNum);
                /* insert row to DB */
                const VALUES = "('" + treatmentNum + "','"  + treatmentInfo  + "','"  + date +  "','" +  workerEmail +  "','" + carNum + "');";
                query_text = 'INSERT INTO mydb.treatments (treatmentNum, treatmentInfo, date, workerEmail, carNum) VALUES' + VALUES;
                connection.query(query_text, function (err, result, fields) {
                    try{
                        if(err) throw err;
                        else{
                        console.log(">>>INSERTED INTO mydb.treatments:\n" + VALUES);
                        res.send("SUCCESS");
                        }
                    }
                    catch(err){
                        console.log(err);

                    }
                });

            }
        }
        catch(err){
            console.error(err);
            res.send("SQL ERROR");
        }
    });
});




app.listen(port);
console.log('Server started! At http://localhost:' + port);

//lib.sendMailToUser(nodemailer,"avivshichman@gmail.com","david","david david");


app.get('/Login', function (req, res) {
    res.sendFile(path.join(__dirname + '/ContactUsPage.html'));
})

app.post('/Login' , function (req, res){
var email = encryption.encrypt(req.body.email);
var password = encryption.encrypt(req.body.psw);

connection.query("SELECT email,encryptedPassword FROM mydb.users WHERE email = ?", email, function (err, result, fields) {  
    try{
        if (err) throw err;
        if(result == ""){
            res.send("NO SUCH EMAIL");
            console.log("here 3");
        }
        else if(password === result[0].encryptedPassword){ 
            res.send("SUCCESS");
            console.log("here 2");
        }
        else{
            res.send("PASSWORD NOT MATCH");
            console.log("here 1");
        }
    }
    catch(err){
        console.error(err);
        res.send("SQL ERROR");
    }
    }); 
});

app.post('/SignUpPage' , function (req, res){
    var email = encryption.encrypt(req.body.email);
    var password = req.body.password;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    
    
    /** check if exist in DB */
    connection.query("SELECT email FROM mydb.users WHERE email = ?", email, function (err, result, fields) {
        
        try{
            if (err) throw err;
            if(result == ""){
                /** Enter user to the DB */
                password = encryption.encrypt(password);
                const VALUES = "('" + email + "','"  + password  + "','"  + firstName +  "','" +  lastName + "');";
                query_text = 'INSERT INTO mydb.users (email, encryptedPassword, firstName, lastName) VALUES' + VALUES;
                connection.query(query_text,  async function (err, result, fields){
                    try{
                        if (err) throw err;
                        console.log("insert");
                        console.log(result);
                        //send email to the user
                        //TODO: Email dont work 
                            // var emailToSend = JSON.stringify(email);
                            // lib.sendMailToUser(nodemailer,emailToSend,"SUCCESSFULLY SIGNUP","You have signed up successfully to our website\nYour user is: "+email);
                        res.send("SUCCESS");
                    }
                    catch{
                        console.error(err);
                        res.send("SQL ERROR");
                    }
                });
            }
            else{ 
            res.send("EXIST");
            }
        }
        catch(err){
            console.error(err);
            res.send("SQL ERROR");
        }
        });  
});

app.post('/contactUsPage',jsonParser, async function (req, res) {
    var email = req.body.email;
    var select_in = req.body.my_selection;
    var in_message = req.body.xMessage;
    //console.log("Message from client: " + email + " with the following severity: " + select_in + " says: \n" + in_message);
     var our_email = "avivsagiproj@gmail.com"
     var emailToSend = JSON.stringify(our_email);
     lib.sendMailToUser(nodemailer,"avivsagiproj@gmail.com" ,"Garage " + JSON.stringify(req.body.my_selection) + " Issue",JSON.stringify(req.body.in_message));
     res.send("SUCCESS");
});

app.post('/ForgotPassword',jsonParser, async function (req, resul) {
    var emailToSend = JSON.stringify(req.body.Email);
    lib.sendMailToUser(nodemailer,emailToSend,"Forgot password email","simulation of forgot password");
    resul.send("EMET ani gever");
});