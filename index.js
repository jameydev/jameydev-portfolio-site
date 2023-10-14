// File: index.js
// Description: 
//  Main entry point for the application;
//  Runs the server and handles all requests
// Author: Jamey Bryce
// Date Created: 10/06/2023

// Import dependencies
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const mime = require('mime-types');
const bodyParser = require('body-parser');

// Load dotenv variables
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Logging middleware
app.use(morgan('tiny'));

// Handlebars middleware
app.engine('handlebars', exphbs.engine({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the MIME type explicitly
// for client side scripts
const setFormMimeType = (req, res, file) => {
    const filePath = path.join(
        __dirname, 
        'public', 
        'js', 
        file
    );
    const mimeType = mime.lookup(filePath);
    res.set('Content-Type', mimeType);
    res.sendFile(filePath);
}

app.get('/js/slider.js', (req, res) => {
    setFormMimeType(req, res, 'slider.js');
});

app.get('/js/form.js', (req, res) => {
    setFormMimeType(req, res, 'form.js');
});

// Routes
app.use(require('./routes/home'));
app.use(require('./routes/contact'));

// Start server
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'http://localhost';
app.listen(PORT, () => {
    console.log(`Server running on port ${HOST}:${PORT}`.green.bold);
});
