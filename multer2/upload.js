const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Define the schema for User
const userSchema = new mongoose.Schema({
    fullname: String,
    avatar: String
});

// Create a model
const User = mongoose.model('User', userSchema);

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback) {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
            callback(null, true);
        } else {
            callback(new Error('Only PNG and JPEG images are allowed'));
        }
    }
});

app.get('/', (req, res) => {
    res.render('file');
});

app.post('/ok', upload.single('avatar'), function(req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file, req.body);
    res.redirect('/'); // Redirect to the home page
});

app.post('/photo', upload.single('photo'), async(req, res) => {
    // req.file is the `photo` file
    // req.body will hold the text fields, if there were any
    console.log(req.file, req.body);
    
    // Create a new user with the uploaded file path
    const newUser = new User({
        fullname: req.body.fullname,
        avatar: req.file.path
    });

    // Save the user to the database
    try {
        await newUser.save();
        res.redirect('/'); // Redirect to the home page
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating user');
    }
});

app.listen(7070, () => {
    console.log("Server is running on port 7070");
});
