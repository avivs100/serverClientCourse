var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var nodemailer = require('nodemailer');
const lib = require("./sendMailModule");
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

app.post('/ForgotPassword', async function (req, resul) {
    var email11 = req.data.Email;
    console.log("server side:")
    console.log(email11)
    console.log("ESH AL HA GOLESH")
    //lib.sendMailToUser(nodemailer,req.body,"Forgot password email","simulation of forgot password");
});

app.listen(port);
console.log('Server started! At http://localhost:' + port);

lib.sendMailToUser(nodemailer,"avivshichman@gmail.com","david","david david");