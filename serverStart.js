var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var nodemailer = require('nodemailer');

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

app.listen(port);
console.log('Server started! At http://localhost:' + port);




var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'avivsagiproj@gmail.com',
    pass: '123456AS'
  }
});

var mailOptions = {
  from: 'avivsagiproj@gmail.com',
  to: 'avi1aviv2@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});