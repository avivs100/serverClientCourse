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
})

app.get('/contactUsPage', function (req, res) {
    res.sendFile(path.join(__dirname + '/ContactUsPage.html'));
})

app.get('/ForgotPassword', function (req, res) {
    res.sendFile(path.join(__dirname + '/ForgotPassword.html'));
})

app.post('/ForgotPassword',jsonParser, async function (req, resul) {
    var emailToSend = JSON.stringify(req.body.Email);
    lib.sendMailToUser(nodemailer,emailToSend,"Forgot password email","simulation of forgot password");
    resul.send("AB");
});

app.get('/dashboard', function (req, res) {
    res.sendFile(path.join(__dirname + '/dashboard.html'));
})

var dataToSend = [["Moshe","Cohen","22","moshe@gmail.com"],["david","Cohen","26","david@gmail.com"],["Moshe","adas","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"],["Moshe","Cohen","22","moshe@gmail.com"]];
app.post('/dashboard',jsonParser, async function (req, resul) {
    resul.send(dataToSend);
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);

//lib.sendMailToUser(nodemailer,"avivshichman@gmail.com","david","david david");