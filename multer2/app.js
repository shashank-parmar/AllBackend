const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./view'));

// Middleware to parse JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route to render the file upload form
app.get('/', (req, res) => {
    res.render('file');
});

const upload = multer({ dest: 'uploads/' });

app.post('/ok', upload.single('avatar'), (req, res, next) => {
    console.log(req.file, req.body);
    res.redirect('/'); 
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

// const uploadss = multer({
//     storage: storage,
//     fileFilter: function (req, file, cb) {
//         if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
//             cb(null, true);
//         } else {
//             cb(new Error('Only PNG and JPEG images are allowed'), false);
//         }
//     }
// });

// app.post('/photo', uploadss.single('photo'), (req, res) => {
//     if (req.file) {
//         res.status(200).send({ message: 'File uploaded successfully', file: req.file });
//     } else {
//         res.status(400).send({ message: 'Failed to upload file' });
//     }
// });

app.listen(7070, () => {
    console.log('Server is running on port 7070');
});
