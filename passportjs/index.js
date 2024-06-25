const express = require('express');
require('./model/index'); // Ensure this file initializes your database connection
const User = require('./model/index'); // Import the User model
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const session = require('express-session');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'Shashank', // Replace with your secret
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Configure the local strategy for use by Passport.
passport.use(new LocalStrategy(
  function (name, password, done) {
    User.findOne({ name: name }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
      if (!user.verifyPassword(password)) { return done(null, false, { message: 'Incorrect password.' }); }
      return done(null, user);
    });
  }
));

// Serialize user to the session
passport.serializeUser((user, done) => {
  done(null, user.id); // Save the user ID to the session
});

// Deserialize user from the session
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user); // Attach the user object to req.user
  });
});

// Route to create a new user
app.post('/create', async (req, res) => {
  const body = req.body;
  try {
    const ins = await User.create({
      name: body.name,
      password: body.password,
    });
    res.send(ins);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Login route
app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
  function (req, res) {
    res.redirect('/create' + req.user.name);
  });

// Route to get user information (protected)
app.get('/:name', (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Hello ${req.user.name}`);
  } else {
    res.send('You are not logged inn');
  }
});

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
