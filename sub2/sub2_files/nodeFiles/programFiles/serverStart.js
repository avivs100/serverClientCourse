var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');

app.use(express.static(__dirname));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '../../HomePage/HomePage.html'));
// })

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '../../../loginPage/LoginPage.html'));
})

app.get('/signUpPage', function (req, res) {
    res.sendFile(path.join(__dirname + '../../signUpPage/SignUpPage.html'));
})

app.get('/sign-up', function (req, res) {
    res.sendFile(path.join(__dirname + '../../contactUsPage/ContactUsPage.html'));
})

app.listen(port);
console.log('Server started! At http://localhost:' + port);
