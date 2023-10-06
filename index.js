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

const app = express();

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

// Routes
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        message: 'Welcome to my website!'
    });
});

// app.get('/about', (req, res) => {
//     res.render('about', {
//         title: 'About Me',
//         message: 'Learn more about me and my work.'
//     });
// });

// Start server
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'http://localhost';
app.listen(PORT, () => {
    console.log(`Server running on port ${HOST}:${PORT}`.green.bold);
});
