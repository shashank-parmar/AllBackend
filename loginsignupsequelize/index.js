const bodyParser = require('body-parser');
const express = require('express')
const app = express();
const db = require('./model/index')
const path = require('path');
const user = require('./controller/user')
const User = db.User;

const userroute = require('./routes/user')
require('./model/index');
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set("view engine", 'ejs');
app.set("views", path.resolve("./view"));

app.use('/users', userroute.route);



app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});


app.post('/signup',async(req,res)=>{
    const bd = req.body;
    const innn = await User.create({
        firstname:bd.username,
        password:bd.password,
    })
    res.send(innn)
})              

app.listen(7777)
