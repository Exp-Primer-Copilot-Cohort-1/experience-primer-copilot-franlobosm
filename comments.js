// Create web server

// Import modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Import routes
const comments = require('./routes/comments');

// Create web server
const app = express();

// Set port
const port = 3000;

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set static directory
app.use(express.static(path.join(__dirname, 'public')));

// Use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Use routes
app.use('/', comments);

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});