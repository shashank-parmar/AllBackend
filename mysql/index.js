const connection = require('./connection');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to get data from the database
app.get('/data/:id', (req, res) => {
    const body = req.params.body;
    connection.query('SELECT * FROM employe WHERE id = ?',[body], (err, rows) => {
        res.send(rows)
    });
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Express server is listening on port ${PORT}`));
