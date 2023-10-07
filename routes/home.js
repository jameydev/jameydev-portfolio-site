// File: home.js
// Description: 
//  Handles the home page route
// Author: Jamey Bryce
// Date Created: 10/06/2023

const router = require('express').Router();

const home = router.get('/', (req, res) => {
    res.render('home', {
        title: 'JameyDev - FullStack Developer - Home Page',
        time: new Date().toLocaleString()
    });
});

module.exports = home;