const { createConnection } = require('mysql2');

// Create a connection to the database
const connection = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Shashank2004',
    database: 'testdb'
});

// Connect to MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('MySQL database connected');
});

module.exports = connection;
