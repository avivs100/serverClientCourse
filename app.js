const express = require("express")
const jwt = require("jsonwebtoken")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')

let user = {
    id:  "123",
    email: "abv@gmail.com",
    password: "aa"
}

const JWT_SECRET = 'some super secret...'

app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.get('/forgot-password', (req, res, next) => {
    res.render('forgot-password');
 });

app.post('/forgot-password', (req, res, next) => {
    const {email} = req.body;

    //make sure user is really exists in DB
    if (email !== user.email){
        res.send("User not registered");
        return
    }

    // user exists and now create a one time link valid for 15 minutes
    const secret = JWT_SECRET + user.password
    const payload = {
        email: user.email,
        id: user.id
    }
    const token = jwt.sign(payload, secret, {expiresIn: '15m'})
    const link = 'http://localhost:3000/reset-password/${user.id}/${token}'
    console.log(link)
    res.send("password reset link has been sent to ur mail")
});



app.get('/reset-password', (req, res, next) => {});

app.post('/reset-password', (req, res, next) => {});

app.listen(3000, () => console.log('AA @ http://localhost:3000'));
