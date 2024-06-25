const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const user = require('./src/config');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser()); // Use cookie-parser middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", 'ejs');
app.set("views", path.resolve("./view"));

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', async (req, res) => {
    const data = {
        name: req.body.username,
        password: req.body.password,
    };

    const token = await jwt.sign({ data }, 'shashank', { expiresIn: '1y' });

    const exist = await user.findOne({ name: data.name });
    if (exist) {
        res.send('User already exists');
    } else {
        const round = 10;
        const hashpass = await bcrypt.hash(data.password, round);
        data.password = hashpass;   

        const ins = await user.insertMany({
            name: data.name,
            password: data.password,
            token: token,
        });

        res.cookie('jwt', token, {
            httpOnly: true,
        });

        res.send('User signed up successfully');
    }
});
app.post('/login', async (req, res) => {
    try {
        const check = await user.findOne({ name: req.body.username });
        if (!check) {
            res.send("User not found, please sign up first");
        } else {
            const passmatch = await bcrypt.compare(req.body.password, check.password);
            const matchjwt = await jwt.verify(req.cookies.jwt, 'shashank');

            if (passmatch && matchjwt && req.cookies.jwt === check.token) {
                res.render('home');
            } else {
                res.send("Wrong password forgot please");
            }
        }
    } catch (error) {
        res.send("Error: " + error);
    }
});

app.get('/delete', (req, res) => {  
    res.clearCookie('jwt');
    res.redirect('/login');
  });
  
app.post('/reset',async(req,res)=>{
    try {
        const check = await user.findOne({ name: req.body.username });
        if (!check) {
            res.send("User not found, please sign up first");
        } else {
            const passmatch = await bcrypt.compare(req.body.password, check.password);
            const matchjwt = await jwt.verify(req.cookies.jwt, 'shashank');

            if (passmatch && matchjwt && req.cookies.jwt === check.token) {
                const newPassword = await bcrypt.hash(req.body.newpass, 10);
                const reset = await user.updateOne({ username: req.body.username }, { password: newPassword });
                res.render('reset');
            } else {
                res.send("Wrong password forgot please");
            }
        }
    } catch (error) {
        res.send("Error: " + error);
    }
})

app.put('/forgot', async (req, res) => {
    try {
      const find = req.body.name;
      const tk = await user.findOne({ name: find });
      if (!tk) {
        return res.status(404).send('User not found');
      }
      const fnd = tk.token;
      jwt.verify(fnd, 'shashank', async (err, decoded) => {
        if (err) {
          return res.status(403).send('Unauthorized user');
        } 
        const updatedUser = await user.findOneAndUpdate(
          { name: find },
          { $set: { password: req.body.password } },
          { new: true }
        );
        res.send('Password updated successfully');
      });
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

app.listen(6001);
